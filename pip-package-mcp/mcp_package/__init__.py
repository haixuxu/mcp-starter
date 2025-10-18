def handle(req):
    return {"id": req.get("id"), "output": f"pip package handled: {req.get('prompt','')}"}
