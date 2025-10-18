import sys
import json
from . import handle

def main():
    data = sys.stdin.read()
    try:
        req = json.loads(data)
    except Exception:
        return
    print(json.dumps(handle(req)))

if __name__ == '__main__':
    main()
