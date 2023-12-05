from flask import Flask, render_template, request, redirect, url_for
from datetime import datetime
import os


#Flaskのインスタンスを生成
app = Flask(__name__, static_folder='static')
if __name__ == '__main__':
    app.run(debug=True)

@app.route("/", methods=["GET", "POST"])
def index():
    # "/"にGETメソッドで渡された場合の処理
    if request.method == "GET":
        # Postクラスからの全データをリスト形式で取得するORM
        # 取得したpostsという全データをindex.htmlに渡す
        return render_template("index.html")
