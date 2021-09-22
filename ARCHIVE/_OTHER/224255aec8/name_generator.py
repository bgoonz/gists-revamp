import random

KATAKANA_1 = [
    "a",
    "i",
    "u",
    "e",
    "o",
    "ka",
    "ki",
    "ku",
    "ke",
    "ko",
    "sa",
    "shi",
    "su",
    "se",
    "so",
    "ta",
    "chi",
    "tsu",
    "te",
    "to",
    "na",
    "ni",
    "nu",
    "ne",
    "no",
    "ha",
    "hi",
    "fu",
    "fe",
    "fo",
    "ma",
    "mi",
    "mu",
    "me",
    "mo",
    "ra",
    "ri",
    "ru",
    "re",
    "ro",
    "ya",
    "yu",
    "yo",
    "wa",
    "wo",
    "ga",
    "gi",
    "gu",
    "ge",
    "go",
    "za",
    "ji",
    "zu",
    "ze",
    "zo",
    "da",
    "de",
    "do",
    "ba",
    "bi",
    "bu",
    "be",
    "bo",
    "pa",
    "pi",
    "pu",
    "pe",
    "po",
]

KATAKANA_2 = [
    "kya",
    "kyu",
    "kyo",
    "sha",
    "shu",
    "sho",
    "cha",
    "chu",
    "cho",
    "nya",
    "nyu",
    "nyo",
    "hya",
    "hyu",
    "hyo",
    "mya",
    "myu",
    "myo",
    "rya",
    "ryu",
    "ryo",
    "gya",
    "gyu",
    "gyo",
    "ja",
    "ju",
    "jo",
    "bya",
    "byu",
    "byo",
    "pya",
    "pyu",
    "pyo",
]


def random_name(**kwargs):
    country = "jp"
    if kwargs.has_key("country"):
        country = kwargs["country"]
    if country == "jp":
        name_length = random.randrange(3, 5)
        result = []
        for i in xrange(name_length):
            if i == 0:
                result.append(random.choice(KATAKANA_1 + KATAKANA_2))
            else:
                result.append(random.choice(KATAKANA_1))
        return "".join(result)


def random_sentence(size):
    return unicode(" ".join([random_name() for i in xrange(size)]))
