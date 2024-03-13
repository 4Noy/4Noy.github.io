
KEY1 = "a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313"
KEY2_XOR_KEY1 = "37dcb292030faa90d07eec17e3b1c6d8daf94c35d4c9191a5e1e"
KEY2_XOR_KEY3 = "c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1"
FLAG_XOR_KEY1_XOR_KEY3_XOR_KEY2 = "04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf"

def xor(a, b):
    """
    xor two hexadecimal strings
    """
    bytes_a = bytes.fromhex(a)
    bytes_b = bytes.fromhex(b)

    result_bytes = bytes(x ^ y for x, y in zip(bytes_a, bytes_b))

    result_hex = result_bytes.hex()

    return result_hex

def hexa_to_string(a):
    """
    return the decoded string from an hexa string
    """
    string_FLAG = bytes.fromhex(a).decode('utf-8')

    return string_FLAG



