import os

BASE_URL = "https://bornforthis.cn/web_runing/"
path_lst = ["data", "web_base"]


def suffix(string: str):
    postfix = string.split(".")
    postfix_lst = ["html", "png", "jpg", "jpge"]
    if postfix[-1] in postfix_lst:
        return string
    else:
        pass


def path_split():
    result_lst = []
    for i in path_lst:
        # print(list(os.walk(i)))
        for path in os.walk(i):
            # print(path)
            if path[2]:
                # print(path)
                for i in path[2]:
                    string = path[0] + i
                    # print(result)
                    result = suffix(string)
                    # print(result)
                    if result is not None:
                        result_lst.append(result)
    return result_lst


def save_md(path_lst):
    result_lst = []
    template = """
```link
{}
```\n
    """
    for path in path_lst:
        with open("README.md", "a+", encoding="utf-8") as f:
            content = template.format(BASE_URL + path)
            f.write(content)


if __name__ == '__main__':
    r = path_split()
    print(len(r))
    save_md(r)
