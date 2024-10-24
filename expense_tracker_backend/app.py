from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

expenses = []  # List to hold expenses

@app.route('/api/expenses', methods=['GET', 'POST'])
def manage_expenses():
    if request.method == 'POST':
        expense = request.json
        expenses.append(expense)  # Add expense to the list
        return jsonify(expense), 201  # Return the added expense with 201 status
    return jsonify(expenses)  # Return the list of expenses

if __name__ == '__main__':
    app.run(debug=True)  # Run the app in debug mode
