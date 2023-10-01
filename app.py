from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def donation_history():
    return render_template('donation_history.html')

if __name__ == '__main__':
    app.run(debug=True)
