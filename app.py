from flask import Flask, request
from video import get_transcript, summarize_transcript
import openai

# create Flask App
app = Flask(__name__)


@app.get('/summary')
def summary_api():
    url = request.args.get('url', '')
    text = get_transcript(url)
    summary = summarize_transcript(text)
    return summary


if __name__ == '__main__':
    app.config['SECRET_KEY'] = 'the key you generated'
    app.run()
    # app.run(debug=True, host='0.0.0.0', port='8080')
