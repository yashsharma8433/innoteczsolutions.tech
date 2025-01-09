from flask import Flask, render_template, request, redirect, url_for
import smtplib
from email.message import EmailMessage
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
app = Flask(__name__)
app.template_folder = '../templates'
app.static_folder = '../static'
def send(email_id,to_email,quote_email,quote_msg):
    msg = EmailMessage()
    msg['Subject'] = f'from {quote_email}'
    msg['From'] = email_id
    msg['To'] = to_email
    msg.set_content(f'{quote_msg}')
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(email_id, 'tzethlzweqpxhokr')
        smtp.send_message(msg)

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/email")
def e():
    quote_email = request.args.get('email')
    quote_msg = request.args.get('msg')
    send("innoteczsolutions@gmail.com", "innoteczsolutions@gmail.com",quote_email,quote_msg)
    return "Done"
if __name__ == '__main__':
    app.run(debug=True)
