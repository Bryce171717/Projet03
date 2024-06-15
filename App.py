# app.py
from flask import Flask, request, jsonify
import openai

app = Flask(__name__)


openai.api_key = 'YOUR_OPENAI_API_KEY' ###################

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({"error": "No message provided"}), 400
    try:
        response = openai.Completion.create(
            engine="text-davinci-003",  
            
            prompt=user_message,
            max_tokens=150
        )
        return jsonify(response.choices[0].text.strip())
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
