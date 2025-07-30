from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You're a helpful assistant."},
        {"role": "user", "content": task}
    ]
)

generated_code = response.choices[0].message.content
