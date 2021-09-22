(function __3_html__(G) {
    function __sort_fn__(a, b) {
        return a - b;
    }
    var partial = G.definePartial,
        clone = G.cloneObj,
        extend = G.extend,
        esc = G.strEscapes,
        error = G.error,
        unerr = new Error("Unknown error"),
        RLH = G.RangeLiteralHash,
        cID = "3.html";
    partial(function __settings__($, $$) {
        $ = $ || {};
        $$ = clone($$) || {};
        var i, ret = "",
            ret2, _;
        ret += "\n    <h1>Settings</h1>\n    ";
        ret2 = (function __loop__() {
            function __iter__($, $$, value, key, index) {
                var i, ret = "",
                    ret2, _;
                if (value == null) return ret;
                $$ = clone($$);
                _ = {
                    value: value,
                    key: key,
                    index: index,
                    even: (index % 2) === 0,
                    odd: (index % 2) === 1,
                    first: (index === 0),
                    last: (index === len - 1)
                };
                try {
                    $$.name = _.key;
                } catch (err1) {
                    return error(cID, {
                        "type": 11,
                        "pos": {
                            "line": 3,
                            "col": 21
                        },
                        "val": "name = _.key"
                    }, "Assignment failed in loop iteration: " + JSON.stringify(_, ["key", "index"]), err1);
                }
                try {
                    $$.options = {};
                    var _set = ['low', 'high'];
                    for (i = 0; i < 2; i++) {
                        $$.options[_set[i]] = (_.value === _set[i]) ? "checked" : "";
                    }
                } catch (err2) {
                    return error(cID, {
                        "type": 11,
                        "pos": {
                            "line": 3,
                            "col": 36
                        },
                        "val": "options['low','high'] = _.value ? \"checked\" : \"\""
                    }, "Assignment failed in loop iteration: " + JSON.stringify(_, ["key", "index"]), err2);
                }
                ret += "\n        <h2>";
                try {
                    ret += $$.name;
                } catch (err) {
                    return error(cID, {
                        "type": 9,
                        "pos": {
                            "line": 4,
                            "col": 16
                        },
                        "val": "name"
                    }, "Insert reference failed", err);
                }
                ret += "</h2>\n        ";
                ret2 = (function __loop__() {
                    function __iter__($, $$, value, key, index) {
                        var i, ret = "",
                            ret2, _;
                        if (value == null) return ret;
                        $$ = clone($$);
                        _ = {
                            value: value,
                            key: key,
                            index: index,
                            even: (index % 2) === 0,
                            odd: (index % 2) === 1,
                            first: (index === 0),
                            last: (index === len - 1)
                        };
                        ret += "\n            <input type=\"radio\" name=\"";
                        try {
                            ret += $$.name;
                        } catch (err) {
                            return error(cID, {
                                "type": 9,
                                "pos": {
                                    "line": 6,
                                    "col": 42
                                },
                                "val": "name"
                            }, "Insert reference failed", err);
                        }
                        ret += "\" value=\"";
                        try {
                            ret += _.key;
                        } catch (err) {
                            return error(cID, {
                                "type": 9,
                                "pos": {
                                    "line": 6,
                                    "col": 62
                                },
                                "val": "_.key"
                            }, "Insert reference failed", err);
                        }
                        ret += "\" ";
                        try {
                            ret += _.value;
                        } catch (err) {
                            return error(cID, {
                                "type": 9,
                                "pos": {
                                    "line": 6,
                                    "col": 76
                                },
                                "val": "_.value"
                            }, "Insert reference failed", err);
                        }
                        ret += "> ";
                        try {
                            ret += _.key;
                        } catch (err) {
                            return error(cID, {
                                "type": 9,
                                "pos": {
                                    "line": 6,
                                    "col": 92
                                },
                                "val": "_.key"
                            }, "Insert reference failed", err);
                        }
                        ret += "\n        ";
                        return ret;
                    }
                    var i, j = 0,
                        len, ret = "",
                        it, tmp;
                    try {
                        it = $$.options;
                        if (it == null) {
                            return "";
                        }
                        if (Object.prototype.toString.call(it) === "[object Array]") {
                            len = it.length;
                            for (i = 0; i < len; i++) {
                                ret2 = __iter__($, $$, it[i], "" + i, i);
                                if (ret2 instanceof G.TemplateError) {
                                    return ret2;
                                } else {
                                    ret += ret2;
                                }
                            }
                        } else if (typeof it === "object") {
                            tmp = Object.keys(it);
                            len = tmp.length;
                            if (it instanceof RLH) {
                                tmp.sort(__sort_fn__);
                                for (i = 0; i < len; i++) {
                                    ret2 = __iter__($, $$, it[tmp[i]], tmp[i], i);
                                    if (ret2 instanceof G.TemplateError) {
                                        return ret2;
                                    } else {
                                        ret += ret2;
                                    }
                                }
                            } else {
                                for (i in it) {
                                    if (it.hasOwnProperty(i)) {
                                        ret2 = __iter__($, $$, it[i], i, j++);
                                        if (ret2 instanceof G.TemplateError) {
                                            return ret2;
                                        } else {
                                            ret += ret2;
                                        }
                                    }
                                }
                            }
                        } else {
                            return error(cID, {
                                "type": 9,
                                "pos": {
                                    "line": 5,
                                    "col": 12
                                },
                                "val": "options"
                            }, "Invalid loop-iterator reference") || unerr;
                        }
                    } catch (err) {
                        return error(cID, {
                            "type": 9,
                            "pos": {
                                "line": 5,
                                "col": 12
                            },
                            "val": "options"
                        }, "Failed loop iteration", err);
                    }
                    return ret;
                })();
                if (ret2 instanceof G.TemplateError) {
                    return ret2;
                } else {
                    ret += ret2;
                }
                ret += "\n    ";
                return ret;
            }
            var i, j = 0,
                len, ret = "",
                it, tmp;
            try {
                it = $.settings;
                if (it == null) {
                    return "";
                }
                if (Object.prototype.toString.call(it) === "[object Array]") {
                    len = it.length;
                    for (i = 0; i < len; i++) {
                        ret2 = __iter__($, $$, it[i], "" + i, i);
                        if (ret2 instanceof G.TemplateError) {
                            return ret2;
                        } else {
                            ret += ret2;
                        }
                    }
                } else if (typeof it === "object") {
                    tmp = Object.keys(it);
                    len = tmp.length;
                    if (it instanceof RLH) {
                        tmp.sort(__sort_fn__);
                        for (i = 0; i < len; i++) {
                            ret2 = __iter__($, $$, it[tmp[i]], tmp[i], i);
                            if (ret2 instanceof G.TemplateError) {
                                return ret2;
                            } else {
                                ret += ret2;
                            }
                        }
                    } else {
                        for (i in it) {
                            if (it.hasOwnProperty(i)) {
                                ret2 = __iter__($, $$, it[i], i, j++);
                                if (ret2 instanceof G.TemplateError) {
                                    return ret2;
                                } else {
                                    ret += ret2;
                                }
                            }
                        }
                    }
                } else {
                    return error(cID, {
                        "type": 9,
                        "pos": {
                            "line": 3,
                            "col": 8
                        },
                        "val": "$.settings"
                    }, "Invalid loop-iterator reference") || unerr;
                }
            } catch (err) {
                return error(cID, {
                    "type": 9,
                    "pos": {
                        "line": 3,
                        "col": 8
                    },
                    "val": "$.settings"
                }, "Failed loop iteration", err);
            }
            return ret;
        })();
        if (ret2 instanceof G.TemplateError) {
            return ret2;
        } else {
            ret += ret2;
        }
        ret += "\n";
        return ret;
    }, "3.html#settings", {
        "type": 2,
        "pos": {
            "line": 1,
            "col": 0
        },
        "val": "{$: '#settings' }"
    });
})(this.grips || grips);