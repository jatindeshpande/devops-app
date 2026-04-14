from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    return {"message": "DevOps API running 🚀"}

# 🔹 Liveness Probe (basic check)
@app.route("/live")
def liveness():
    return jsonify({
        "status": "alive"
    }), 200

# 🔹 Readiness Probe (can include dependency checks)
@app.route("/ready")
def readiness():
    # Example: simulate dependency check
    try:
        # Add real checks here (DB, cache, etc.)
        return jsonify({
            "status": "ready"
        }), 200
    except Exception as e:
        return jsonify({
            "status": "not ready",
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)