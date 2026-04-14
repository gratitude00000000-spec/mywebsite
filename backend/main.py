from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from anthropic import Anthropic
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://gratitude-okinawa.com"],
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)

client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

SYSTEM_PROMPT = """あなたは株式会社Gratitude（グラティテュード）の公式AIアシスタントです。
丁寧で親しみやすい日本語でお客様の質問にお答えください。

【会社情報】
- 会社名：株式会社Gratitude -グラティテュード-
- 代表取締役：諸見里 楓摩
- 所在地：沖縄県那覇市牧志2-18-4 パレットマキシ2-C
- TEL：098-975-5682
- 事業内容：飲食・集客・マーケティング・採用支援を通じて、事業成長を支える企業

【直営パーティー会場】
- PARTYSPACE NEXT那覇（那覇）
  公式サイト：https://www.partyspace-next.com/
  Instagram：@partyspace_next
- PARTYSPACE NEXTⅡ 沖縄市
  公式サイト：https://www.partyspace-next2.com/
  Instagram：@next.okinawacity

【対応できること】
- 会社・サービスについての質問
- パーティー会場についての質問
- お問い合わせ方法のご案内
- Webマーケティング・MEO・LLMO対策についての説明

わからない質問は「詳しくはお問い合わせください（098-975-5682）」とご案内してください。
回答は簡潔に、2〜4文程度でお願いします。"""


class ChatRequest(BaseModel):
    message: str
    history: list[dict] = []


@app.post("/chat")
async def chat(req: ChatRequest):
    if not req.message.strip():
        raise HTTPException(status_code=400, detail="メッセージを入力してください")

    messages = req.history + [{"role": "user", "content": req.message}]

    response = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=512,
        system=SYSTEM_PROMPT,
        messages=messages,
    )

    return {"reply": response.content[0].text}


@app.get("/health")
async def health():
    return {"status": "ok"}
