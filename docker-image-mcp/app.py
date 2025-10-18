from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/respond', methods=['POST'])
def respond():
    body = request.get_json() or {}
    prompt = body.get('prompt','')
    return jsonify({"output": f"docker handled: {prompt}"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
