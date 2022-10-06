import os

BASE_URL = "https://bornforthis.cn/web_runing/"
path_lst = ["FAQ", "data", "web_base", "crawler", "pyechars", "blog", "Tester", "video_cloumn"]


def suffix(string: str):
    postfix = string.split(".")
    postfix_lst = ["html", "png", "jpg", "jpge", "zip", "xlsx"]
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
                    string = path[0] + "/" + i
                    # print(result)
                    result = suffix(string)
                    print(result)
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
    with open("README.md", "w+", encoding="utf-8") as f:
        for path in path_lst:
            content = template.format(BASE_URL + path)
            f.write(content)

def pull():
    os.system("sh aiyc.sh")




def main():
    r = path_split()
    print(len(r))
    save_md(r)
    pull()


if __name__ == '__main__':
    main()
