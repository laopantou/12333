(function(t) {
    function e(e) {
        for (var a, u, r = e[0], o = e[1], l = e[2], c = 0, d = []; c < r.length; c++) u = r[c], i[u] && d.push(i[u][0]), i[u] = 0;
        for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
        p && p(e);
        while (d.length) d.shift()();
        return s.push.apply(s, l || []), n()
    }

    function n() {
        for (var t, e = 0; e < s.length; e++) {
            for (var n = s[e], a = !0, r = 1; r < n.length; r++) {
                var o = n[r];
                0 !== i[o] && (a = !1)
            }
            a && (s.splice(e--, 1), t = u(u.s = n[0]))
        }
        return t
    }
    var a = {},
        i = {
            app: 0
        },
        s = [];

    function u(e) {
        if (a[e]) return a[e].exports;
        var n = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, u), n.l = !0, n.exports
    }
    u.m = t, u.c = a, u.d = function(t, e, n) {
        u.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, u.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, u.t = function(t, e) {
        if (1 & e && (t = u(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (u.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) u.d(n, a, function(e) {
                return t[e]
            }.bind(null, a));
        return n
    }, u.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return u.d(e, "a", e), e
    }, u.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, u.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        o = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var l = 0; l < r.length; l++) e(r[l]);
    var p = o;
    s.push([0, "chunk-vendors"]), n()
})({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "034f": function(t, e, n) {
        "use strict";
        var a = n("64a9"),
            i = n.n(a);
        i.a
    },
    "0829": function(t, e, n) {
        t.exports = n.p + "img/ARB.48c1ba5c.png"
    },
    "0fde": function(t, e, n) {},
    "120f": function(t, e, n) {
        "use strict";
        var a = n("c7c0"),
            i = n.n(a);
        i.a
    },
    1282: function(t, e, n) {},
    1907: function(t, e, n) {},
    "1e65": function(t, e, n) {
        t.exports = n.p + "img/dog2.0e36da31.png"
    },
    "1f63": function(t, e, n) {
        t.exports = n.p + "img/echart.e7dcb667.png"
    },
    "1fcb": function(t, e, n) {
        t.exports = n.p + "img/baipishu.72a1522e.png"
    },
    "225e": function(t, e, n) {
        t.exports = n.p + "img/dog11.48e6c9e9.png"
    },
    "2a27": function(t, e, n) {
        t.exports = n.p + "img/dog10.75b57095.png"
    },
    "347d": function(t, e, n) {
        t.exports = n.p + "img/shi.fdd9e0ab.png"
    },
    "35cd": function(t) {
        t.exports = {}
    },
    "3b6c": function(t, e, n) {
        t.exports = n.p + "img/tp.8ad33130.svg"
    },
    "3bc9": function(t, e, n) {
        t.exports = n.p + "img/dog6.ecbee881.png"
    },
    "3d5a": function(t, e, n) {
        t.exports = n.p + "img/meta.811c779b.svg"
    },
    4982: function(t, e, n) {
        t.exports = n.p + "img/banner-bg.95b966b4.png"
    },
    "4a85": function(t) {
        t.exports = [{
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint128",
                name: "nonce",
                type: "uint128"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "address",
                name: "referrer",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256"
            }],
            name: "Claim",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8"
            }],
            name: "Initialized",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            inputs: [],
            name: "INIT_CLAIM",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "MAX_ADDRESSES",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "MAX_TOKEN",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "_claimedUser",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "_usedNonce",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "canClaimAmount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint128",
                name: "nonce",
                type: "uint128"
            }, {
                internalType: "bytes",
                name: "signature",
                type: "bytes"
            }, {
                internalType: "address",
                name: "referrer",
                type: "address"
            }],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "claimedCount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "claimedPercentage",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "claimedSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "user",
                type: "address"
            }],
            name: "getInfoView",
            outputs: [{
                components: [{
                    internalType: "uint256",
                    name: "maxToken",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "initClaim",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "currentClaim",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "claimed",
                    type: "bool"
                }, {
                    internalType: "uint256",
                    name: "inviteRewards",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "inviteUsers",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "claimedSupply",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "claimedCount",
                    type: "uint256"
                }],
                internalType: "struct DistributionPool.InfoView",
                name: "",
                type: "tuple"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "token_",
                type: "address"
            }],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "inviteRewards",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "inviteUsers",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "val",
                type: "address"
            }],
            name: "setSigner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "signer",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "token",
            outputs: [{
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }]
    },
    "4db7": function(t, e, n) {
        t.exports = n.p + "img/all-bg.d3656977.png"
    },
    "51c4": function(t) {
        t.exports = [{
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8"
            }],
            name: "Initialized",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "tickId",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "probability",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amountUSD",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256"
            }],
            name: "NewTick",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "tickId",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "address",
                name: "winner",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "bonus",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256"
            }],
            name: "Winner",
            type: "event"
        }, {
            inputs: [{
                internalType: "address",
                name: "val",
                type: "address"
            }],
            name: "addCaller",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "bonusToken",
            outputs: [{
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "caller",
                type: "address"
            }],
            name: "delCaller",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "getCallers",
            outputs: [{
                internalType: "address[]",
                name: "ret",
                type: "address[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "getTickTypeWithTradeAmount",
            outputs: [{
                internalType: "uint256",
                name: "tp",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountUSD",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "getTickTypeWithTradeUsdAmount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "pure",
            type: "function"
        }, {
            inputs: [],
            name: "getView",
            outputs: [{
                components: [{
                    internalType: "uint256",
                    name: "currentTicks",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "currentBonusPool",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "totalBonus",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "latestBonusTimestamp",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "minBonus",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "maxBonus",
                    type: "uint256"
                }],
                internalType: "struct Jackpot.InfoView",
                name: "",
                type: "tuple"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "contract IERC20",
                name: "bonusToken_",
                type: "address"
            }, {
                internalType: "address",
                name: "tradeToken_",
                type: "address"
            }, {
                internalType: "contract ISwapTools",
                name: "swapTools_",
                type: "address"
            }, {
                internalType: "uint256",
                name: "minBonus_",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "maxBonus_",
                type: "uint256"
            }],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "latestBonusTimestamp",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "lottery",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "maxBonus",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "minBonus",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "val",
                type: "uint256"
            }],
            name: "setLatestBonusTimestamp",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "val",
                type: "uint256"
            }],
            name: "setMaxBouns",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "val",
                type: "uint256"
            }],
            name: "setMinBouns",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "contract ISwapTools",
                name: "val",
                type: "address"
            }],
            name: "setSwapTools",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256[]",
                name: "vals",
                type: "uint256[]"
            }],
            name: "setTickProbability",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "price",
                type: "uint256"
            }],
            name: "setTokenPrice",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "val",
                type: "address"
            }],
            name: "setTradeToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "swapTools",
            outputs: [{
                internalType: "contract ISwapTools",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "tickId",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "tickProbability",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "ticks",
            outputs: [{
                internalType: "uint256",
                name: "id",
                type: "uint256"
            }, {
                internalType: "address",
                name: "user",
                type: "address"
            }, {
                internalType: "uint256",
                name: "probability",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "tokenPrice",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalBonus",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalProbability",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "tradeEvent",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "tradeToken",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            stateMutability: "payable",
            type: "receive"
        }]
    },
    5567: function(t, e, n) {
        t.exports = n.p + "img/time.c6afc214.png"
    },
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var a = n("2b0e"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("Header"), t.show ? n("Notice", {
                    on: {
                        notice: t.readed
                    }
                }) : t._e(), n("router-view"), n("Footer")], 1)
            },
            s = [],
            u = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "content"
                }, [a("div", {
                    staticClass: "header-lg hidden-sm-and-down"
                }, [a("el-row", [a("el-col", {
                    attrs: {
                        span: 4
                    }
                }, [a("div", {
                    staticClass: "logo-icon"
                }, [a("img", {
                    staticClass: "logo",
                    attrs: {
                        src: n("cf05")
                    }
                }), a("div", {
                    staticClass: "name"
                }, [t._v("\n\t\t\t\t\t\tARBFLOKI\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        span: 16
                    }
                }, [a("div", {
                    staticClass: "meuns"
                }, [t._l(t.menuList, function(e, n) {
                    return a("div", {
                        key: n,
                        class: t.activeMenu == n ? "active" : "menu",
                        on: {
                            click: function(e) {
                                return t.changeM(n)
                            }
                        }
                    }, [a("router-link", {
                        attrs: {
                            to: e.url
                        }
                    }, [t._v(t._s(e.name))])], 1)
                }), a("div", {
                    staticClass: "menu-soon",
                    on: {
                        click: t.soon
                    }
                }, [t._v("\n\t\t\t\t\t\tPlayToEarn\n\t\t\t\t\t")])], 2)]), a("el-col", {
                    attrs: {
                        span: 4
                    }
                }, [t.address ? a("div", {
                    staticClass: "connect"
                }, [a("div", {
                    staticClass: "btn",
                    on: {
                        click: t.showInfo
                    }
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t._f("addressFilter")(t.address)) + " "), a("i", {
                    staticClass: "el-icon-caret-bottom"
                })]), t.show ? a("div", {
                    staticClass: "users"
                }, [a("div", {
                    staticClass: "user-logo"
                }, [a("img", {
                    staticClass: "u-icon",
                    attrs: {
                        src: n("cf05")
                    }
                }), a("div", {
                    staticClass: "num"
                }, [t._v("\n\t\t\t\t\t\t\t\t0.00 AiFLOKI\n\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "opersu"
                }, [a("el-button", {
                    staticClass: "buy-btn bb",
                    on: {
                        click: t.buyToken
                    }
                }, [t._v("Buy AiFLOKI")])], 1), a("div", {
                    staticClass: "opersu"
                }, [a("el-button", {
                    staticClass: "buy-btn dd",
                    on: {
                        click: t.out
                    }
                }, [t._v("Disconnect")])], 1)]) : t._e()]) : a("div", {
                    staticClass: "connect"
                }, [a("div", {
                    staticClass: "btn",
                    on: {
                        click: function(e) {
                            t.dialogVisible = !0
                        }
                    }
                }, [t._v("\n\t\t\t\t\t\tConnect Wallet\n\t\t\t\t\t")])]), a("el-dialog", {
                    attrs: {
                        visible: t.dialogVisible,
                        width: "40%",
                        "append-to-body": !0,
                        "modal-append-to-body": !1
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogVisible = e
                        }
                    }
                }, [a("div", {
                    staticClass: "dialog"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\t\t\t\tConnect Wallet\n\t\t\t\t\t\t")]), a("div", {
                    staticClass: "wallets"
                }, [a("div", {
                    staticClass: "wallet",
                    on: {
                        click: t.Metamask
                    }
                }, [a("img", {
                    staticClass: "wicon",
                    attrs: {
                        src: n("3d5a")
                    }
                }), a("div", {
                    staticClass: "mname"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tMetamask\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "wallet",
                    on: {
                        click: t.Metamask
                    }
                }, [a("img", {
                    staticClass: "wicon",
                    attrs: {
                        src: n("76a5")
                    }
                }), a("div", {
                    staticClass: "mname"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tOKX Wallet\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "wallet",
                    on: {
                        click: t.Metamask
                    }
                }, [a("img", {
                    staticClass: "wicon",
                    attrs: {
                        src: n("88a8")
                    }
                }), a("div", {
                    staticClass: "mname"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tBitKeep\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "wallet",
                    on: {
                        click: t.Metamask
                    }
                }, [a("img", {
                    staticClass: "wicon",
                    attrs: {
                        src: n("3b6c")
                    }
                }), a("div", {
                    staticClass: "mname"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tTokenPocket\n\t\t\t\t\t\t\t\t")])])])])])], 1)], 1)], 1), a("div", {
                    staticClass: "header-md hidden-md-and-up"
                }, [a("div", {
                    staticClass: "menus-sm"
                }, [t._m(0), a("div", {
                    staticClass: "right"
                }, [t.address ? a("div", {
                    staticClass: "connect"
                }, [a("div", {
                    staticClass: "btn",
                    on: {
                        click: t.showInfo
                    }
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t._f("addressFilter")(t.address)) + " "), a("i", {
                    staticClass: "el-icon-caret-bottom"
                })]), t.show ? a("div", {
                    staticClass: "users"
                }, [t._m(1), a("div", {
                    staticClass: "opersu"
                }, [a("el-button", {
                    staticClass: "buy-btn bb",
                    on: {
                        click: t.buyToken
                    }
                }, [t._v("Buy AiFLOKI")])], 1), a("div", {
                    staticClass: "opersu"
                }, [a("el-button", {
                    staticClass: "buy-btn dd",
                    on: {
                        click: t.out
                    }
                }, [t._v("Disconnect")])], 1)]) : t._e()]) : a("div", {
                    staticClass: "connect"
                }, [a("div", {
                    staticClass: "btn",
                    on: {
                        click: function(e) {
                            t.dialogVisibles = !0
                        }
                    }
                }, [t._v("\n\t\t\t\t\t\tConnect Wallet\n\t\t\t\t\t")])]), a("el-dialog", {
                    attrs: {
                        visible: t.dialogVisibles,
                        width: "80%",
                        "append-to-body": !0,
                        "modal-append-to-body": !1
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogVisibles = e
                        }
                    }
                }, [a("div", {
                    staticClass: "dialog"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\t\t\t\tConnect Wallet\n\t\t\t\t\t\t")]), a("div", {
                    staticClass: "wallets"
                }, [a("div", {
                    staticClass: "wallet",
                    on: {
                        click: t.Metamask
                    }
                }, [a("img", {
                    staticClass: "wicon",
                    attrs: {
                        src: n("3d5a")
                    }
                }), a("div", {
                    staticClass: "mname"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tMetamask\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "wallet",
                    on: {
                        click: t.Metamask
                    }
                }, [a("img", {
                    staticClass: "wicon",
                    attrs: {
                        src: n("76a5")
                    }
                }), a("div", {
                    staticClass: "mname"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tOKX Wallet\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "wallet",
                    on: {
                        click: t.Metamask
                    }
                }, [a("img", {
                    staticClass: "wicon",
                    attrs: {
                        src: n("88a8")
                    }
                }), a("div", {
                    staticClass: "mname"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tBitKeep\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "wallet",
                    on: {
                        click: t.Metamask
                    }
                }, [a("img", {
                    staticClass: "wicon",
                    attrs: {
                        src: n("3b6c")
                    }
                }), a("div", {
                    staticClass: "mname"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tTokenPocket\n\t\t\t\t\t\t\t\t")])])])])]), a("div", {
                    staticClass: "m-icons"
                }, [a("img", {
                    staticClass: "m-icon",
                    attrs: {
                        src: n("682e")
                    },
                    on: {
                        click: t.openDrawer
                    }
                })]), a("el-drawer", {
                    attrs: {
                        visible: t.drawer,
                        direction: "ltr",
                        withHeader: !1,
                        "append-to-body": !0,
                        "modal-append-to-body": !1
                    },
                    on: {
                        "update:visible": function(e) {
                            t.drawer = e
                        }
                    }
                }, [a("div", {
                    staticClass: "draw-cont"
                }, [a("div", {
                    staticClass: "top"
                }, [a("div", {
                    staticClass: "logosm-icon"
                }, [a("img", {
                    staticClass: "logo",
                    attrs: {
                        src: n("cf05")
                    }
                }), a("div", {
                    staticClass: "namesm"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tARBFLOKI\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "close"
                }, [a("i", {
                    staticClass: "el-icon-circle-close",
                    on: {
                        click: t.closeDrawer
                    }
                })])]), a("div", {
                    staticClass: "menusms"
                }, [t._l(t.menuList, function(e, n) {
                    return a("div", {
                        key: n,
                        class: t.activeMenu == n ? "activesm" : "menusm",
                        attrs: {
                            abort: ""
                        },
                        on: {
                            click: function(e) {
                                return t.choose(n)
                            }
                        }
                    }, [a("router-link", {
                        attrs: {
                            to: e.url
                        }
                    }, [t._v(t._s(e.name))])], 1)
                }), a("div", {
                    staticClass: "menu-soon",
                    on: {
                        click: t.soon
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\tPlayToEarn\n\t\t\t\t\t\t\t")])], 2)])])], 1)])])])
            },
            r = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "logosm-icon"
                }, [a("img", {
                    staticClass: "logo",
                    attrs: {
                        src: n("cf05")
                    }
                }), a("div", {
                    staticClass: "namesm"
                }, [t._v("\n\t\t\t\t\tARBFLOKI\n\t\t\t\t")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "user-logo"
                }, [a("img", {
                    staticClass: "u-icon",
                    attrs: {
                        src: n("cf05")
                    }
                }), a("div", {
                    staticClass: "num"
                }, [t._v("\n\t\t\t\t\t\t\t\t0.00 AiFLOKI\n\t\t\t\t\t\t\t")])])
            }],
            o = (n("96cf"), n("3b8d")),
            l = (n("e05f"), {
                data: function() {
                    return {
                        address: "",
                        activeMenu: "0",
                        menuList: [{
                            id: 0,
                            name: "Home",
                            url: "/"
                        }, {
                            id: 1,
                            name: "LP",
                            url: "lp"
                        }, {
                            id: 2,
                            name: "Earn",
                            url: "earn"
                        }, {
                            id: 3,
                            name: "LuckDrop",
                            url: "luck"
                        }, {
                            id: 4,
                            name: "Doges",
                            url: "nft"
                        }],
                        dialogVisible: !1,
                        dialogVisibles: !1,
                        drawer: !1,
                        show: !1
                    }
                },
                created: function() {
                    var t = sessionStorage.getItem("active");
                    this.activeMenu = t || 0, this.checkChain(), this.getMetaMask();
                    var e = sessionStorage.getItem("address");
                    e && (this.address = e)
                },
                filters: {
                    addressFilter: function(t) {
                        if (t) {
                            var e = t.slice(0, 4),
                                n = t.slice(-4);
                            return "".concat(e, "***").concat(n)
                        }
                        return "***"
                    },
                    priceFilters: function(t) {
                        return t ? parseFloat(t).toFixed(4) : "0.00"
                    }
                },
                methods: {
                    changeM: function(t) {
                        this.activeMenu = t, sessionStorage.setItem("active", t)
                    },
                    soon: function() {
                        this.$message("Coming soon...")
                    },
                    showInfo: function() {
                        this.show = !this.show
                    },
                    out: function() {
                        sessionStorage.clear(), location.reload()
                    },
                    handleClose: function() {
                        this.dialogVisible = !1
                    },
                    openDrawer: function() {
                        this.drawer = !0
                    },
                    closeDrawer: function() {
                        this.drawer = !1
                    },
                    choose: function(t) {
                        this.activeMenu = t, sessionStorage.setItem("active", t), this.drawer = !1
                    },
                    checkChain: function() {
                        if (window.ethereum) {
                            var t = this.$web3;
                            window.ethereum.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: t.utils.numberToHex(42161)
                                }]
                            }).then(function() {
                                console.log("ARB")
                            }).catch(function(t) {
                                console.log(t)
                            })
                        }
                    },
                    getMetaMask: function() {
                        window.ethereum ? ethereum.on("accountsChanged", function(t) {
                            sessionStorage.setItem("address", t[0]), this.address = t[0], location.reload()
                        }) : console.log("metamask!")
                    },
                    Metamask: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            var e = this;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        window.ethereum ? window.ethereum.enable().then(function(t) {
                                            sessionStorage.setItem("address", t[0]), e.address = t[0], e.dialogVisible = !1, e.dialogVisibles = !1
                                        }) : console.log("metamask!");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    buyToken: function() {
                        window.open("https://app.camelot.exchange/?token1=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&token2=0x09E18590E8f76b6Cf471b3cd75fE1A1a9D2B2c2b", "_blank")
                    }
                }
            }),
            p = l,
            c = (n("a179"), n("2877")),
            d = Object(c["a"])(p, u, r, !1, null, "56d35ded", null),
            y = d.exports,
            m = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "notice"
                }, [n("div", {
                    staticClass: "infos"
                }, [n("div", {
                    staticClass: "cont"
                }, [t._m(0), n("div", {
                    staticClass: "times"
                }, [n("div", {
                    staticClass: "time d"
                }, [n("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t.dd) + "\n\t\t\t\t\t")]), n("div", {
                    staticClass: "unit"
                }, [t._v("\n\t\t\t\t\t\td\n\t\t\t\t\t")])]), n("div", {
                    staticClass: "line"
                }, [t._v("\n\t\t\t\t\t:\n\t\t\t\t")]), n("div", {
                    staticClass: "time h"
                }, [n("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t.hh) + "\n\t\t\t\t\t")]), n("div", {
                    staticClass: "unit"
                }, [t._v("\n\t\t\t\t\t\th\n\t\t\t\t\t")])]), n("div", {
                    staticClass: "line"
                }, [t._v("\n\t\t\t\t\t:\n\t\t\t\t")]), n("div", {
                    staticClass: "time m"
                }, [n("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t.mm) + "\n\t\t\t\t\t")]), n("div", {
                    staticClass: "unit"
                }, [t._v("\n\t\t\t\t\t\tm\n\t\t\t\t\t")])]), n("div", {
                    staticClass: "line"
                }, [t._v("\n\t\t\t\t\t:\n\t\t\t\t")]), n("div", {
                    staticClass: "time s"
                }, [n("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t.ss) + "\n\t\t\t\t\t")]), n("div", {
                    staticClass: "unit"
                }, [t._v("\n\t\t\t\t\t\ts\n\t\t\t\t\t")])])]), n("div", {
                    staticClass: "oper"
                }, [n("div", {
                    staticClass: "btn",
                    on: {
                        click: t.konw
                    }
                }, [t._v("\n\t\t\t\t\tCopy That\n\t\t\t\t")])])])])])
            },
            v = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\tClaim Airdrop "), n("br"), t._v("Countdown\n\t\t\t")])
            }],
            b = {
                data: function() {
                    return {
                        dd: "00",
                        hh: "00",
                        mm: "00",
                        ss: "00"
                    }
                },
                mounted: function() {
                    this.Time()
                },
                methods: {
                    Time: function() {
                        var t = this;
                        setInterval(function() {
                            t.cuntDown()
                        }, 1e3)
                    },
                    cuntDown: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a, i, s, u, r, o;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e = parseInt((new Date).getTime() / 1e3) + "", n = "2023/04/28 20:00:00", a = parseInt(new Date(n) / 1e3) + "", console.log(a), i = a - e, i > 0 ? (s = parseInt(i / 60 / 60 / 24), u = parseInt(i / 60 / 60 % 24), r = parseInt(i / 60 % 60), o = parseInt(i % 60), this.dd = s < 10 ? "0" + s : s, this.hh = u < 10 ? "0" + u : u, this.mm = r < 10 ? "0" + r : r, this.ss = o < 10 ? "0" + o : o) : (this.hh = "00", this.mm = "00", this.ss = "00");
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    konw: function() {
                        this.$emit("notice", !0), sessionStorage.setItem("notice", "1")
                    }
                }
            },
            f = b,
            g = (n("fb4c"), Object(c["a"])(f, m, v, !1, null, "306fae82", null)),
            C = g.exports,
            T = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "footer"
                }, [a("div", {
                    staticClass: "medias"
                }, [a("div", {
                    staticClass: "desc"
                }, [t._v("\n\t\t\tArb Floki Ai is the first next-generation MEME blockchain games platform, ushering in\n\t\t\tthe new paradigm of Web3gaming.\n\t\t")]), a("div", {
                    staticClass: "media"
                }, [a("div", {
                    staticClass: "micon"
                }, [a("img", {
                    staticClass: "tele",
                    attrs: {
                        src: n("8d5f")
                    },
                    on: {
                        click: t.Twitter
                    }
                })]), a("div", {
                    staticClass: "micon"
                }, [a("img", {
                    staticClass: "tele",
                    attrs: {
                        src: n("c2ea")
                    },
                    on: {
                        click: t.Telegram
                    }
                })]), a("div", {
                    staticClass: "micon"
                }, [a("img", {
                    staticClass: "tele",
                    attrs: {
                        src: n("1fcb")
                    },
                    on: {
                        click: t.book
                    }
                })])])]), a("div", {
                    staticClass: "foot"
                }, [t._v("\n\t\t© 2023 Arbitrum AiFLOKI. All right reserved.\n\t")])])
            },
            w = [],
            h = {
                data: function() {
                    return {}
                },
                methods: {
                    Twitter: function() {
                        window.open("https://twitter.com/ArbFlokiAI", "_blank")
                    },
                    Telegram: function() {
                        window.open("https://t.me/+woRkYQz5rmMyYThl", "_blank")
                    },
                    book: function() {
                        window.open("https://arbflokiai.gitbook.io/arb-floki-ai/", "_blank")
                    }
                }
            },
            A = h,
            _ = (n("c9e7"), Object(c["a"])(A, T, w, !1, null, "3fe9febe", null)),
            k = _.exports,
            x = {
                components: {
                    Header: y,
                    Notice: C,
                    Footer: k
                },
                data: function() {
                    return {
                        show: !1
                    }
                },
                mounted: function() {
                    this.checkNotice()
                },
                methods: {
                    checkNotice: function() {
                        var t = sessionStorage.getItem("notice");
                        this.show = !t || 1 != t, console.log("notice", t)
                    },
                    readed: function() {
                        this.show = !1
                    }
                }
            },
            M = x,
            I = (n("034f"), Object(c["a"])(M, i, s, !1, null, null, null)),
            F = I.exports,
            B = n("cee4"),
            E = n("8c4f"),
            S = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "index"
                }, [a("div", {
                    staticClass: "banner"
                }, [a("img", {
                    staticClass: "bgs",
                    attrs: {
                        src: n("4982")
                    }
                }), a("div", {
                    staticClass: "lunbo"
                }, [a("div", {
                    staticClass: "swiper-container"
                }, [a("div", {
                    staticClass: "swiper-wrapper"
                }, t._l(t.imgList, function(t, e) {
                    return a("div", {
                        key: e,
                        staticClass: "swiper-slide"
                    }, [a("img", {
                        staticClass: "dog-img",
                        attrs: {
                            src: t.url,
                            alt: ""
                        }
                    })])
                }), 0), t._m(0), t._m(1)])])]), a("div", {
                    staticClass: "all"
                }, [a("div", {
                    staticClass: "buy"
                }, [a("div", {
                    staticClass: "claim"
                }, [a("div", {
                    staticClass: "godf"
                }, [a("img", {
                    staticClass: "fight",
                    attrs: {
                        src: n("8b42"),
                        "open-delay": 200
                    }
                })]), a("div", {
                    staticClass: "bt"
                }, [t._v("\n\t\t\t\t\tYou can claim AiFLOKI now!\n\t\t\t\t")]), a("div", {
                    staticClass: "dec"
                }, [t._v("\n\t\t\t\t\tA total of 20,000,000,000 AiFLOKI tokens are now available to be claimed by those who\n\t\t\t\t\thave\n\t\t\t\t\tclaimed the ARB airdrop.\n\t\t\t\t")]), a("div", {
                    staticClass: "dec"
                }, [t._v("\n\t\t\t\t\tAiFLOKI tokens that have not been claimed within 31 days will be used for the Community\n\t\t\t\t\tLong-Term\n\t\t\t\t\tIncentive Reward Program. The AiFLOKI will be distributed to the top contributors of Arbitrum\n\t\t\t\t\tcommunity and burned.\n\t\t\t\t")]), t._m(2), a("div", {
                    staticClass: "recd"
                }, [a("div", {
                    staticClass: "retit"
                }, [t._v("\n\t\t\t\t\t\tReceived\n\t\t\t\t\t")]), a("div", {
                    staticClass: "renum"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t.receive) + "\n\t\t\t\t\t")])]), a("div", {
                    staticClass: "percent"
                }, [a("el-progress", {
                    attrs: {
                        percentage: t.percent,
                        "stroke-width": 14,
                        color: t.customColor
                    }
                })], 1), a("div", {
                    staticClass: "inp"
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.token,
                        expression: "token"
                    }],
                    staticClass: "in",
                    attrs: {
                        disabled: ""
                    },
                    domProps: {
                        value: t.token
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.token = e.target.value)
                        }
                    }
                })]), a("div", {
                    staticClass: "opers"
                }, [a("el-row", {
                    attrs: {
                        gutter: 30
                    }
                }, [a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 24,
                        xs: 24
                    }
                }, [0 == t.claim ? a("el-button", {
                    staticClass: "oper",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.Claim
                    }
                }, [t._v("Claim\n\t\t\t\t\t\t\t\tAirdrop")]) : t._e(), 1 == t.claim ? a("el-button", {
                    staticClass: "opered",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("Claiming...")]) : t._e()], 1), a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 24,
                        xs: 24
                    }
                }, [a("el-button", {
                    staticClass: "oper operr",
                    attrs: {
                        type: "text",
                        id: "copyBtn",
                        "data-clipboard-text": t.shareUrl,
                        "data-clipboard-action": "copy"
                    },
                    on: {
                        click: t.invite
                    }
                }, [t._v("Invite Friends")]), a("div", {
                    staticClass: "oth"
                }, [t._v("\n\t\t\t\t\t\t\t\tCan receive 10%AiFLOKI from the inviter!\n\t\t\t\t\t\t\t")])], 1)], 1)], 1), a("img", {
                    staticClass: "fights",
                    attrs: {
                        src: n("347d")
                    }
                })])]), a("div", {
                    staticClass: "about"
                }, [a("el-row", [a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 12
                    }
                }, [a("div", {
                    staticClass: "aboutl"
                }, [a("div", {
                    staticClass: "atit"
                }, [t._v("\n\t\t\t\t\t\t\tWhat Is AiFLOKI?\n\t\t\t\t\t\t")]), a("div", {
                    staticClass: "intros"
                }, [t._v("\n\t\t\t\t\t\t\tArb Floki Ai is the first next-generation MEME blockchain games platform, ushering in\n\t\t\t\t\t\t\tthe new paradigm of Web3gaming. Thetotalsupply is 100,000,000,000,000 tokens. AiFLOKI\n\t\t\t\t\t\t\tbelongs to everyone in the Arbitrum\n\t\t\t\t\t\t\tcommunity and is also a necessary key to unlock the future chapters of the AiFLOKI\n\t\t\t\t\t\t\tstory.\n\t\t\t\t\t\t")]), a("div", {
                    staticClass: "intros"
                }, [t._v("\n\t\t\t\t\t\t\tAiFLOKI has a 15% burning tax, so adjusting your slippage tolerance to around 20% is\n\t\t\t\t\t\t\tsuggested when buying/selling to ensure your successful transactions. Every time you buy\n\t\t\t\t\t\t\tAiFLOKI, you will receive a Lucky Drop ticket with a chance to win an ARB prize based on\n\t\t\t\t\t\t\tthe\n\t\t\t\t\t\t\tpurchase amount. You can also stake your AiFLOKI to earn more.\n\t\t\t\t\t\t")]), a("div", {
                    staticClass: "uses"
                }, [a("el-row", [a("el-col", {
                    attrs: {
                        lg: 8,
                        md: 8,
                        sm: 10
                    }
                }, [a("el-button", {
                    staticClass: "operu",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.buyToken
                    }
                }, [t._v("Buy AiFloki")])], 1), a("el-col", {
                    attrs: {
                        lg: 8,
                        md: 8,
                        sm: 10
                    }
                }, [a("el-button", {
                    staticClass: "opery",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.docs
                    }
                }, [t._v("View Docs "), a("i", {
                    staticClass: "el-icon-paperclip"
                })])], 1)], 1)], 1)])]), a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 12
                    }
                }, [a("div", {
                    staticClass: "aboutr"
                }, [a("img", {
                    staticClass: "eimgs",
                    attrs: {
                        src: n("1e65")
                    }
                })])])], 1)], 1), t._m(3), a("div", {
                    staticClass: "items"
                }, [a("div", {
                    staticClass: "tit"
                }, [t._v("\n\t\t\t\tStatistics\n\t\t\t")]), a("div", {
                    staticClass: "tip"
                }, [t._v("\n\t\t\t\tJoin the industry leaders to discuss where the markets are heading. We accept token payments.\n\t\t\t")]), a("div", {
                    staticClass: "lists"
                }, [a("el-row", {
                    attrs: {
                        gutter: 14
                    }
                }, [a("el-col", {
                    attrs: {
                        lg: 4,
                        md: 12,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "list"
                }, [a("div", {
                    staticClass: "tits"
                }, [t._v("\n\t\t\t\t\t\t\t\t210,000T\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tips"
                }, [t._v("\n\t\t\t\t\t\t\t\tAiFLOKI Total Supply\n\t\t\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 4,
                        md: 12,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "list"
                }, [a("div", {
                    staticClass: "tits"
                }, [t._v("\n\t\t\t\t\t\t\t\t208,555T\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tips"
                }, [t._v("\n\t\t\t\t\t\t\t\tAiFLOKI Currency Supply\n\t\t\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 4,
                        md: 12,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "list"
                }, [a("div", {
                    staticClass: "tits"
                }, [t._v("\n\t\t\t\t\t\t\t\t1,444T\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tips"
                }, [t._v("\n\t\t\t\t\t\t\t\tAiFLOKI Total Burn\n\t\t\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 4,
                        md: 12,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "list"
                }, [a("div", {
                    staticClass: "tits"
                }, [t._v("\n\t\t\t\t\t\t\t\t144,363T\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tips"
                }, [t._v("\n\t\t\t\t\t\t\t\tAiFLOKI Trading Volume\n\t\t\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 4,
                        md: 12,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "list"
                }, [a("div", {
                    staticClass: "tits"
                }, [t._v("\n\t\t\t\t\t\t\t\t40,770.503\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tips"
                }, [t._v("\n\t\t\t\t\t\t\t\tLucky Drop Reward $AIF\n\t\t\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 4,
                        md: 12,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "list"
                }, [a("div", {
                    staticClass: "tits"
                }, [t._v("\n\t\t\t\t\t\t\t\t42,381.842\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tips"
                }, [t._v("\n\t\t\t\t\t\t\t\tAiFLOKI Accumulated $AIF\n\t\t\t\t\t\t\t")])])])], 1)], 1)]), a("div", {
                    staticClass: "dogs",
                    on: {
                        click: t.toMint
                    }
                }, [a("el-row", {
                    attrs: {
                        gutter: 30
                    }
                }, [a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 6,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "dog"
                }, [a("img", {
                    staticClass: "dog-icons",
                    attrs: {
                        src: n("9dcf")
                    }
                }), a("div", {
                    staticClass: "txt"
                }, [a("div", {
                    staticClass: "dname"
                }, [t._v("\n\t\t\t\t\t\t\t\tPostman\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "dinfo"
                }, [t._v("\n\t\t\t\t\t\t\t\tGet started\n\t\t\t\t\t\t\t")])])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 6,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "dog"
                }, [a("img", {
                    staticClass: "dog-icons",
                    attrs: {
                        src: n("3bc9")
                    }
                }), a("div", {
                    staticClass: "txt"
                }, [a("div", {
                    staticClass: "dname"
                }, [t._v("\n\t\t\t\t\t\t\t\tAstronaut\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "dinfo"
                }, [t._v("\n\t\t\t\t\t\t\t\tGet started\n\t\t\t\t\t\t\t")])])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 6,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "dog"
                }, [a("img", {
                    staticClass: "dog-icons",
                    attrs: {
                        src: n("eae8")
                    }
                }), a("div", {
                    staticClass: "txt"
                }, [a("div", {
                    staticClass: "dname"
                }, [t._v("\n\t\t\t\t\t\t\t\tBirthday\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "dinfo"
                }, [t._v("\n\t\t\t\t\t\t\t\tGet started\n\t\t\t\t\t\t\t")])])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 6,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "dog"
                }, [a("img", {
                    staticClass: "dog-icons",
                    attrs: {
                        src: n("a8f2")
                    }
                }), a("div", {
                    staticClass: "txt"
                }, [a("div", {
                    staticClass: "dname"
                }, [t._v("\n\t\t\t\t\t\t\t\tGentleman\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "dinfo"
                }, [t._v("\n\t\t\t\t\t\t\t\tGet started\n\t\t\t\t\t\t\t")])])])])], 1)], 1), t._m(4)])])
            },
            O = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "swiper-button-prev"
                }, [a("img", {
                    staticClass: "left-icon",
                    attrs: {
                        src: n("9207")
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "swiper-button-next"
                }, [a("img", {
                    staticClass: "left-icon",
                    attrs: {
                        src: n("5712")
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "times"
                }, [a("img", {
                    staticClass: "ticon",
                    attrs: {
                        src: n("5567")
                    }
                }), a("span", {
                    staticClass: "time"
                }, [t._v("\n\t\t\t\t\t\t2023.04.28 11:00（utc）- 2023.05.28 11:00（utc）\n\t\t\t\t\t")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "card"
                }, [a("img", {
                    staticClass: "eimg",
                    attrs: {
                        src: n("1f63")
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "history"
                }, [a("img", {
                    staticClass: "line-img",
                    attrs: {
                        src: n("aa06")
                    }
                })])
            }],
            R = n("4da1"),
            L = n("640d"),
            P = n("89ee"),
            Q = n("4a85"),
            D = n("b311"),
            K = n.n(D),
            j = {
                data: function() {
                    return {
                        token: 0,
                        percent: 0,
                        receive: 0,
                        refer: "",
                        totalPlayer: "",
                        customColor: "#8E20DE",
                        AIFContract: "0xef6a1621a1273CF4ddAdC3a7D24Fd49c46043D5A",
                        AirdropContract: "0x87878b4Da66E0d567d11f82351b813887B979FEf",
                        ArbContract: "0x912CE59144191C1204E64559FE8253a0e49E6548",
                        claim: 0,
                        shareUrl: "",
                        imgList: [{
                            id: 0,
                            url: "https://aifloki.org/banners/d1.png"
                        }, {
                            id: 1,
                            url: "https://aifloki.org/banners/d2.png"
                        }, {
                            id: 2,
                            url: "https://aifloki.org/banners/d3.png"
                        }, {
                            id: 3,
                            url: "https://aifloki.org/banners/d4.png"
                        }, {
                            id: 4,
                            url: "https://aifloki.org/banners/d5.png"
                        }, {
                            id: 5,
                            url: "https://aifloki.org/banners/d4.png"
                        }, {
                            id: 6,
                            url: "https://aifloki.org/banners/d3.png"
                        }, {
                            id: 7,
                            url: "https://aifloki.org/banners/d2.png"
                        }]
                    }
                },
                created: function() {
                    var t = this.$route.query.ref;
                    t && (this.refer = t), this.getClaimAmount()
                },
                mounted: function() {
                    R["c"].use([R["b"], R["a"]]), new R["c"](".swiper-container", {
                        slidesPerView: 5,
                        spaceBetween: "0.5%",
                        centeredSlides: !0,
                        observer: !0,
                        observeParents: !0,
                        loop: !0,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        },
                        autoplay: {
                            delay: 2e3
                        }
                    })
                },
                methods: {
                    invite: function() {
                        var t = this,
                            e = sessionStorage.getItem("address");
                        if (e) {
                            this.shareUrl = "https://aifloki.org/?ref=" + e;
                            var n = new K.a("#copyBtn");
                            n.on("success", function(e) {
                                t.$message({
                                    message: "Invite immediately!",
                                    type: "success"
                                }), n.destroy()
                            }), n.on("error", function(e) {
                                t.$message("May I invite you again..."), n.destroy()
                            })
                        } else this.$message("Please connect the wallet...")
                    },
                    getClaimAmount: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a, i;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.$web3, sessionStorage.getItem("address"), n = new e.eth.Contract(Q, this.AirdropContract), t.next = 5, n.methods.canClaimAmount().call();
                                    case 5:
                                        return a = t.sent, $web3.utils.fromWei(String(a), "Mwei"), t.next = 9, n.methods.claimedCount().call();
                                    case 9:
                                        t.sent, i = $web3.utils.fromWei(String(a), "Mwei"), this.token = i;
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    Claim: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a, i = this;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e = sessionStorage.getItem("address"), e ? (n = this.$web3, a = sessionStorage.getItem("address"), new n.eth.Contract(P, this.AIFContract), B["a"].get("https://api.aifloki.live/?address=" + a, {
                                            params: {}
                                        }).then(function(t) {
                                            console.log(t)
                                        }).catch(function(t) {
                                            i.$message.error(t)
                                        })) : this.$message("Please connect the wallet...");
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    toMint: function() {
                        this.$router.push("/nft")
                    },
                    docs: function() {
                        window.open("https://arbflokiai.gitbook.io/arb-floki-ai/", "_blank")
                    },
                    buyToken: function() {
                        window.open("https://app.camelot.exchange/?token1=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&token2=0x09E18590E8f76b6Cf471b3cd75fE1A1a9D2B2c2b", "_blank")
                    },
                    soon: function() {
                        this.$message("Coming soon...")
                    }
                }
            },
            V = j,
            U = (n("120f"), Object(c["a"])(V, S, O, !1, null, "6b2bb49e", null)),
            W = U.exports,
            $ = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "cont"
                }, [t._m(0), a("div", {
                    staticClass: "allinfo"
                }, [a("div", {
                    staticClass: "infos"
                }, [a("div", {
                    staticClass: "card"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\t\tAiFLOKI/ETH\n\t\t\t\t")]), a("div", {
                    staticClass: "others"
                }, [a("el-row", [a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "part"
                }, [a("div", {
                    staticClass: "tit"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tTVL\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t0\n\t\t\t\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "part"
                }, [a("div", {
                    staticClass: "tit"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tAPY\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t0 %\n\t\t\t\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "part"
                }, [a("div", {
                    staticClass: "tit"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tPending Rewards\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t0\n\t\t\t\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "part"
                }, [a("div", {
                    staticClass: "tit"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tIssued Rewards\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t0 ARB\n\t\t\t\t\t\t\t\t")])])])], 1)], 1)]), a("div", {
                    staticClass: "cards"
                }, [a("el-row", {
                    attrs: {
                        gutter: 20
                    }
                }, [a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 12
                    }
                }, [a("div", {
                    staticClass: "card"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\t\t\t\t\tMy Rewards\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tokens"
                }, [a("img", {
                    staticClass: "token",
                    attrs: {
                        src: n("cf05")
                    }
                }), a("img", {
                    staticClass: "token",
                    attrs: {
                        src: n("6576")
                    }
                }), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t$ 0.00\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "opers"
                }, [a("el-row", {
                    attrs: {
                        gutter: 10
                    }
                }, [a("el-col", {
                    attrs: {
                        span: 12
                    }
                }, [0 == t.stake ? a("el-button", {
                    staticClass: "oper",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.stakeLp
                    }
                }, [t._v("Start\n\t\t\t\t\t\t\t\t\t\t\tStaking")]) : t._e(), 1 == t.stake ? a("el-button", {
                    staticClass: "opered",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\tStaking...")]) : t._e()], 1), a("el-col", {
                    attrs: {
                        span: 12
                    }
                }, [0 == t.remove ? a("el-button", {
                    staticClass: "operr",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.removeLp
                    }
                }, [t._v("Remove LP")]) : t._e(), 1 == t.remove ? a("el-button", {
                    staticClass: "operred",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("Removing..\n\t\t\t\t\t\t\t\t\t\t")]) : t._e(), a("el-dialog", {
                    staticStyle: {
                        "margin-top": "23vh"
                    },
                    attrs: {
                        title: "Remove LP",
                        visible: t.dialogVisible,
                        "append-to-body": !0,
                        "modal-append-to-body": !1
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogVisible = e
                        }
                    }
                }, [a("div", {
                    staticClass: "stake-dialog"
                }, [a("div", {
                    staticClass: "asset"
                }, [a("div", {
                    staticClass: "balan"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tBalance:\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "bmum"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + t._s(t._f("assetsFilter")(t.total)) + " AiFLOKI/ETH LP\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "inp"
                }, [a("el-input", {
                    staticClass: "in",
                    model: {
                        value: t.lp,
                        callback: function(e) {
                            t.lp = e
                        },
                        expression: "lp"
                    }
                }), a("div", {
                    staticClass: "max"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tMAX\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])], 1), t.total <= 0 ? a("div", {
                    staticClass: "tipa"
                }, [a("span", {
                    staticClass: "warn"
                }, [t._v("Insufficient balance,")]), a("span", {
                    staticClass: "buys",
                    on: {
                        click: t.buy
                    }
                }, [t._v("Get AiFLOKI/ETH LP")])]) : t._e(), a("div", {
                    staticClass: "operas"
                }, [a("el-row", {
                    attrs: {
                        gutter: 20
                    }
                }, [a("el-col", {
                    attrs: {
                        span: 12
                    }
                }, [0 == t.auth && 0 == t.grant ? a("el-button", {
                    staticClass: "opera",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.Approve
                    }
                }, [t._v("Approve")]) : t._e(), 1 == t.auth ? a("el-button", {
                    staticClass: "operaed",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tApproving...")]) : t._e(), 0 == t.auth && t.grant > 0 ? a("el-button", {
                    staticClass: "operaaed",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tApprove")]) : t._e()], 1), a("el-col", {
                    attrs: {
                        span: 12
                    }
                }, [0 == t.remove && 0 == t.grant ? a("el-button", {
                    staticClass: "operaa",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("Remove")]) : t._e(), 0 == t.stake && t.grant > 0 ? a("el-button", {
                    staticClass: "opera",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.Remove
                    }
                }, [t._v("Remove")]) : t._e(), 1 == t.remove ? a("el-button", {
                    staticClass: "operaaed",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRemoving...")]) : t._e()], 1)], 1)], 1)])])], 1)], 1)], 1)])]), a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 12
                    }
                }, [a("div", {
                    staticClass: "card"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\t\t\t\t\tMy Rewards\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tokens"
                }, [a("img", {
                    staticClass: "token",
                    attrs: {
                        src: n("0829")
                    }
                }), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t$ 0.00 ARB\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "opers"
                }, [a("el-row", [a("el-col", {
                    attrs: {
                        span: 24
                    }
                }, [0 == t.claim ? a("el-button", {
                    staticClass: "operr",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.claimAIF
                    }
                }, [t._v("Claim")]) : t._e(), 1 == t.claim ? a("el-button", {
                    staticClass: "operred",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("Claiming...")]) : t._e()], 1)], 1)], 1)])])], 1)], 1)])])])
            },
            H = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "banner"
                }, [a("img", {
                    staticClass: "icon",
                    attrs: {
                        src: n("4db7")
                    }
                }), a("div", {
                    staticClass: "txt"
                }, [t._v("\n\t\t\tStaking LP To "), a("br"), t._v(" Earn ARB\n\t\t")])])
            }],
            N = (n("35cd"), {
                data: function() {
                    return {
                        auth: 0,
                        stake: 0,
                        remove: 0,
                        claim: 0,
                        dialogVisible: !1,
                        total: 0,
                        lp: 0,
                        grant: 0,
                        LpContract: "0x75aa015F41Ba1d92c757a566c876900A07f46909"
                    }
                },
                filters: {
                    assetsFilter: function(t) {
                        if ("0" === t) {
                            var e = "0.0000";
                            return "".concat(e)
                        }
                        var n = parseFloat(t).toFixed(4);
                        return "".concat(n)
                    }
                },
                created: function() {
                    this.getInfos(), this.getMyLp()
                },
                methods: {
                    getInfos: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    stakeLp: function() {
                        window.open("https://app.camelot.exchange/nitro/0xB16cC3669d50F6aFCb81E312489E32C4358c86fE", "_blank")
                    },
                    getMyLp: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    Approve: function() {},
                    removeLp: function() {
                        window.open("https://app.camelot.exchange/nitro/0x436E36F4dee9Ac06C68F93F6D510D210f0E709Be", "_blank")
                    },
                    Remove: function() {},
                    claimAIF: function() {
                        var t = sessionStorage.getItem("address");
                        t ? this.claim = 1 : this.$message("Please connect the wallet...")
                    },
                    buy: function() {
                        window.open("https://app.camelot.exchange/nitro/0x436E36F4dee9Ac06C68F93F6D510D210f0E709Be", "_blank")
                    }
                }
            }),
            G = N,
            q = (n("d06b"), Object(c["a"])(G, $, H, !1, null, "0d00e15d", null)),
            z = q.exports,
            Y = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "cont"
                }, [a("div", {
                    staticClass: "banner"
                }, [a("div", {
                    staticClass: "txt"
                }, [a("div", {
                    staticClass: "total"
                }, [t._v("\n\t\t\t\t$426,636.3018\n\t\t\t")]), a("div", {
                    staticClass: "tits"
                }, [t._v("\n\t\t\t\tTotal Rewards Distributed\n\t\t\t")]), a("div", {
                    staticClass: "tips"
                }, [t._v("\n\t\t\t\tWhen you purchase AiFLOKI, you will receive a ticket with a weight determined by the purchase\n\t\t\t\tamount.\n\t\t\t\tARB airdrop will be distributed every half hour. The algorithm is open-source. Good luck to you!\n\t\t\t")]), a("div", {
                    staticClass: "rule"
                }, [a("el-button", {
                    staticClass: "operrr",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.viewRule
                    }
                }, [t._v("View Rules "), a("i", {
                    staticClass: "el-icon-paperclip"
                })])], 1)])]), a("div", {
                    staticClass: "infos"
                }, [a("div", {
                    staticClass: "card"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\tStatistics\n\t\t\t")]), a("div", {
                    staticClass: "others"
                }, [a("el-row", [a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "part"
                }, [a("div", {
                    staticClass: "tit"
                }, [t._v("\n\t\t\t\t\t\t\t\tTotal Distributed ARB\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t._f("assetsFilter")(t.totalArb)) + "\n\t\t\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "part"
                }, [a("div", {
                    staticClass: "tit"
                }, [t._v("\n\t\t\t\t\t\t\t\tCurrent Round\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t._f("assetsFilter")(t.totalPool)) + "\n\t\t\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "part"
                }, [a("div", {
                    staticClass: "tit"
                }, [t._v("\n\t\t\t\t\t\t\t\tTotal Players\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.player.length) + "\n\t\t\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "part"
                }, [a("div", {
                    staticClass: "tit"
                }, [t._v("\n\t\t\t\t\t\t\t\tTotal Winners\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t0\n\t\t\t\t\t\t\t")])])])], 1)], 1)]), a("div", {
                    staticClass: "cards"
                }, [a("el-row", {
                    attrs: {
                        gutter: 20
                    }
                }, [a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 12
                    }
                }, [a("div", {
                    staticClass: "card"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\t\t\t\tMy Wallet\n\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tokens"
                }, [a("img", {
                    staticClass: "token",
                    attrs: {
                        src: n("cf05")
                    }
                }), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t0.000 AiFLOKI\n\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "opers"
                }, [a("el-row", [a("el-col", {
                    attrs: {
                        span: 24
                    }
                }, [a("el-button", {
                    staticClass: "oper",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.buy
                    }
                }, [t._v("Buy AiFLOKI")])], 1)], 1)], 1)])]), a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 12
                    }
                }, [a("div", {
                    staticClass: "card"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\t\t\t\tMy Rewards\n\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tokens"
                }, [a("img", {
                    staticClass: "token",
                    attrs: {
                        src: n("0829")
                    }
                }), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t0.000 ARB\n\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "opers"
                }, [a("el-row", [a("el-col", {
                    attrs: {
                        span: 24
                    }
                }, [a("el-button", {
                    staticClass: "operr",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.view
                    }
                }, [t._v("View "), a("i", {
                    staticClass: "el-icon-paperclip"
                })])], 1)], 1)], 1)])])], 1)], 1), a("div", {
                    staticClass: "cards"
                }, [a("el-row", {
                    attrs: {
                        gutter: 20
                    }
                }, [a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 12
                    }
                }, [a("div", {
                    staticClass: "card"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\t\t\t\tRecent Players\n\t\t\t\t\t\t")]), a("div", {
                    staticClass: "table"
                }, [a("div", {
                    staticClass: "th"
                }, [a("div", {
                    staticClass: "tds"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tPlayers\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "td"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tPurchase\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "td"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tWeight\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "td"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tTx\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "tr"
                }, [a("div", {
                    staticClass: "tds"
                }, [a("div", {
                    staticClass: "addr"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\tckk4***cmsl\n\t\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "time"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t2023/04/20 12:00:00\n\t\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "td"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "td"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t0\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "td tdicon"
                }, [a("i", {
                    staticClass: "el-icon-paperclip"
                })])]), a("div", {
                    staticClass: "tr"
                }, [a("div", {
                    staticClass: "tds"
                }, [a("div", {
                    staticClass: "addr"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\tckk4***cmsl\n\t\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "time"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t2023/04/20 12:00:00\n\t\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "td"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "td"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t0\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "td tdicon"
                }, [a("i", {
                    staticClass: "el-icon-paperclip"
                })])]), a("div", {
                    staticClass: "tr"
                }, [a("div", {
                    staticClass: "tds"
                }, [a("div", {
                    staticClass: "addr"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\tckk4***cmsl\n\t\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "time"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t2023/04/20 12:00:00\n\t\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "td"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "td"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t0\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "td tdicon"
                }, [a("i", {
                    staticClass: "el-icon-paperclip"
                })])])])])]), a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 12
                    }
                }, [a("div", {
                    staticClass: "card"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\t\t\t\tRecent Winners\n\t\t\t\t\t\t")]), a("div", {
                    staticClass: "table"
                }, [a("div", {
                    staticClass: "th"
                }, [a("div", {
                    staticClass: "tds"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tPlayers\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tdd"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tRewards\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tdd"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tTx\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "tr"
                }, [a("div", {
                    staticClass: "tds"
                }, [a("div", {
                    staticClass: "addr"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\tckk4***cmsl\n\t\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "time"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t2023/04/20 12:00:00\n\t\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "tdd"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tdd tdicon"
                }, [a("i", {
                    staticClass: "el-icon-paperclip"
                })])]), a("div", {
                    staticClass: "tr"
                }, [a("div", {
                    staticClass: "tds"
                }, [a("div", {
                    staticClass: "addr"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\tckk4***cmsl\n\t\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "time"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t2023/04/20 12:00:00\n\t\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "tdd"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tdd tdicon"
                }, [a("i", {
                    staticClass: "el-icon-paperclip"
                })])]), a("div", {
                    staticClass: "tr"
                }, [a("div", {
                    staticClass: "tds"
                }, [a("div", {
                    staticClass: "addr"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\tckk4***cmsl\n\t\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "time"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t2023/04/20 12:00:00\n\t\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "tdd"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tdd tdicon"
                }, [a("i", {
                    staticClass: "el-icon-paperclip"
                })])])])])])], 1)], 1)])])
            },
            J = [],
            X = n("51c4"),
            Z = {
                data: function() {
                    return {
                        LuckContract: "0x75aa015F41Ba1d92c757a566c876900A07f46909",
                        ArbContract: "0x09E18590E8f76b6Cf471b3cd75fE1A1a9D2B2c2b",
                        totalArb: 0,
                        totalPool: 0,
                        current: 0,
                        player: [],
                        winner: 0
                    }
                },
                created: function() {
                    this.getInfos()
                },
                filters: {
                    assetsFilter: function(t) {
                        if ("0" === t) {
                            var e = "0.0000";
                            return "".concat(e)
                        }
                        var n = parseFloat(t).toFixed(4);
                        return "".concat(n)
                    }
                },
                methods: {
                    getInfos: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a, i, s;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.$web3, sessionStorage.getItem("address"), n = new e.eth.Contract(X, this.LuckContract), t.next = 5, n.methods.totalBonus().call();
                                    case 5:
                                        return a = t.sent, this.totalArb = a, i = new e.eth.Contract(L, this.ArbContract), t.next = 10, i.methods.balanceOf(this.LuckContract).call();
                                    case 10:
                                        s = t.sent, this.totalPool = s;
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    buy: function() {
                        window.open("https://app.camelot.exchange/?token1=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&token2=0x09E18590E8f76b6Cf471b3cd75fE1A1a9D2B2c2b", "_blank")
                    },
                    view: function() {
                        window.open("https://arbiscan.io/address/0x912CE59144191C1204E64559FE8253a0e49E6548", "_blank")
                    },
                    viewRule: function() {
                        window.open("https://arbflokiai.gitbook.io/arb-floki-ai/product/airdrop", "_blank")
                    }
                }
            },
            tt = Z,
            et = (n("d515"), Object(c["a"])(tt, Y, J, !1, null, "46ac5b91", null)),
            nt = et.exports,
            at = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "cont"
                }, [t._m(0), a("div", {
                    staticClass: "allinfo"
                }, [a("div", {
                    staticClass: "infos"
                }, [a("div", {
                    staticClass: "card"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\t\tStatistics\n\t\t\t\t")]), a("div", {
                    staticClass: "others"
                }, [a("el-row", [a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 24,
                        xs: 24
                    }
                }, [a("div", {
                    staticClass: "part"
                }, [a("div", {
                    staticClass: "tit"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tCurrent Staking\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t._f("assetsFilter")(t.allSatkeNums)) + " AiFLOKI\n\t\t\t\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 24,
                        xs: 24
                    }
                }, [a("div", {
                    staticClass: "part"
                }, [a("div", {
                    staticClass: "tit"
                }, [t._v("\n\t\t\t\t\t\t\t\t\tAPY\n\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t323.60 %\n\t\t\t\t\t\t\t\t")])])])], 1)], 1)]), a("div", {
                    staticClass: "cards"
                }, [a("el-row", {
                    attrs: {
                        gutter: 20
                    }
                }, [a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 12
                    }
                }, [a("div", {
                    staticClass: "card"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\t\t\t\t\tMy Staking\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tokens"
                }, [a("img", {
                    staticClass: "token",
                    attrs: {
                        src: n("cf05")
                    }
                }), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t._f("assetsFilter")(t.mySatkeNums)) + " AiFLOKI\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "opers"
                }, [a("el-row", [a("el-col", {
                    attrs: {
                        span: 24
                    }
                }, [0 == t.stake ? a("el-button", {
                    staticClass: "oper",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.stakeAIF
                    }
                }, [t._v("Start\n\t\t\t\t\t\t\t\t\t\t\tStaking")]) : t._e(), 1 == t.stake ? a("el-button", {
                    staticClass: "opered",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\tStaking...")]) : t._e()], 1)], 1)], 1), a("el-dialog", {
                    staticStyle: {
                        "margin-top": "23vh"
                    },
                    attrs: {
                        title: "Staking",
                        visible: t.dialogVisible,
                        "append-to-body": !0,
                        "modal-append-to-body": !1
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogVisible = e
                        }
                    }
                }, [a("div", {
                    staticClass: "stake-dialog"
                }, [a("div", {
                    staticClass: "asset"
                }, [a("div", {
                    staticClass: "balan"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\tBalance(AiFLOKI):\n\t\t\t\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "bmum"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(t._f("assetsFilter")(t.total)) + "\n\t\t\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "inp"
                }, [a("el-input", {
                    staticClass: "in",
                    model: {
                        value: t.aif,
                        callback: function(e) {
                            t.aif = e
                        },
                        expression: "aif"
                    }
                }), a("div", {
                    staticClass: "max",
                    on: {
                        click: t.maxToken
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\tMAX\n\t\t\t\t\t\t\t\t\t\t")])], 1), t.total <= 0 ? a("div", {
                    staticClass: "tipa"
                }, [a("span", {
                    staticClass: "warn"
                }, [t._v("Insufficient balance,")]), a("span", {
                    staticClass: "buys",
                    on: {
                        click: t.buy
                    }
                }, [t._v("Get AiFLOKI")])]) : t._e(), a("div", {
                    staticClass: "operas"
                }, [a("el-row", {
                    attrs: {
                        gutter: 20
                    }
                }, [a("el-col", {
                    attrs: {
                        span: 12
                    }
                }, [0 == t.auth && 0 == t.grant ? a("el-button", {
                    staticClass: "opera",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.Approve
                    }
                }, [t._v("Approve")]) : t._e(), 1 == t.auth ? a("el-button", {
                    staticClass: "operaed",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tApproving...")]) : t._e(), 0 == t.auth && t.grant > 0 ? a("el-button", {
                    staticClass: "operaaed",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tApprove")]) : t._e()], 1), a("el-col", {
                    attrs: {
                        span: 12
                    }
                }, [0 == t.stake && 0 == t.grant ? a("el-button", {
                    staticClass: "operaa",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("Stake")]) : t._e(), 0 == t.stake && t.grant > 0 ? a("el-button", {
                    staticClass: "opera",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.Stake
                    }
                }, [t._v("Stake")]) : t._e(), 1 == t.stake ? a("el-button", {
                    staticClass: "operaaed",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tStaking...")]) : t._e()], 1)], 1)], 1)])])], 1)]), a("el-col", {
                    attrs: {
                        lg: 12,
                        md: 12,
                        sm: 12
                    }
                }, [a("div", {
                    staticClass: "card"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n\t\t\t\t\t\t\t\tMy Rewards\n\t\t\t\t\t\t\t")]), a("div", {
                    staticClass: "tokens"
                }, [a("img", {
                    staticClass: "token",
                    attrs: {
                        src: n("cf05")
                    }
                }), a("div", {
                    staticClass: "nums"
                }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t._f("assetsFilter")(t.rewards)) + " AiFLOKI\n\t\t\t\t\t\t\t\t")])]), a("div", {
                    staticClass: "opers"
                }, [a("el-row", [a("el-col", {
                    attrs: {
                        span: 24
                    }
                }, [0 == t.claim ? a("el-button", {
                    staticClass: "operr",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.ClaimRew
                    }
                }, [t._v("Claim Rewards")]) : t._e(), 1 == t.claim ? a("el-button", {
                    staticClass: "operred",
                    attrs: {
                        type: "text"
                    }
                }, [t._v("Claiming...")]) : t._e()], 1)], 1)], 1)])])], 1)], 1)])])])
            },
            it = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "banner"
                }, [a("img", {
                    staticClass: "icon",
                    attrs: {
                        src: n("4db7")
                    }
                }), a("div", {
                    staticClass: "txt"
                }, [t._v("\n\t\t\tStaking to "), a("br"), t._v("Earn AiFLOKI\n\t\t")])])
            }],
            st = n("6917"),
            ut = {
                data: function() {
                    return {
                        stake: 0,
                        claim: 0,
                        AIFContract: "0xef6a1621a1273CF4ddAdC3a7D24Fd49c46043D5A",
                        StakeContract: "0x92e71Fec6e27A94845C40c69259Ed30a723868d7",
                        dialogVisible: !1,
                        total: 0,
                        aif: 0,
                        auth: 0,
                        grant: 0,
                        allSatkeNums: 0,
                        mySatkeNums: 0,
                        rewards: 0
                    }
                },
                filters: {
                    assetsFilter: function(t) {
                        if ("0" === t) {
                            var e = "0.0000";
                            return "".concat(e)
                        }
                        var n = parseFloat(t).toFixed(4);
                        return "".concat(n)
                    }
                },
                created: function() {
                    this.getUserInfo(), this.getGrantNumber(), this.getStake()
                },
                methods: {
                    getUserInfo: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a, i;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.$web3, n = sessionStorage.getItem("address"), a = new e.eth.Contract(P, this.AIFContract), t.next = 5, a.methods.balanceOf(n).call();
                                    case 5:
                                        i = t.sent, this.total = i;
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    getStake: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a, i, s, u, r, o;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.$web3, n = sessionStorage.getItem("address"), a = new e.eth.Contract(st, this.StakeContract), t.next = 5, a.methods.userInfo(0, n).call();
                                    case 5:
                                        return i = t.sent, t.next = 8, a.methods.poolInfo(0).call();
                                    case 8:
                                        s = t.sent, u = $web3.utils.fromWei(String(i.amount), "Mwei"), r = $web3.utils.fromWei(String(s.totalDeposit), "Mwei"), o = $web3.utils.fromWei(String(i.rewardDebt), "Mwei"), this.mySatkeNums = u, this.allSatkeNums = r, this.rewards = o;
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    getGrantNumber: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a, i;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = sessionStorage.getItem("address"), n = this.$web3, a = new n.eth.Contract(P, this.AIFContract), t.next = 5, a.methods.allowance(e, this.StakeContract).call();
                                    case 5:
                                        i = t.sent, this.grant = i;
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    Approve: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a, i, s, u = this;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        this.auth = 1, e = sessionStorage.getItem("address"), n = this.$web3, a = $web3.utils.toWei(String("1000000000000000000"), "Mwei"), i = new n.eth.Contract(P, this.AIFContract), s = this, i.methods.approve(this.StakeContract, BigInt(a)).send({
                                            from: e
                                        }).on("transactionHash", function() {
                                            var t = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                                                var n;
                                                return regeneratorRuntime.wrap(function(t) {
                                                    while (1) switch (t.prev = t.next) {
                                                        case 0:
                                                            e && (n = setInterval(function() {
                                                                s.getGrantNumber(), s.grant > 0 && (u.$message({
                                                                    message: "Approve Success...",
                                                                    type: "success"
                                                                }), s.auth = 0, clearInterval(n))
                                                            }, 1e3));
                                                        case 1:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }, t)
                                            }));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()).catch(function(t) {
                                            u.$message.error(t), s.auth = 0
                                        });
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    maxToken: function() {
                        this.aif = this.total
                    },
                    stakeAIF: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e = sessionStorage.getItem("address"), e ? this.dialogVisible = !0 : this.$message("Please connect the wallet...");
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    Stake: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a, i, s = this;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        this.aif > 0 && parseFloat(this.aif) <= parseFloat(this.total) ? (this.stake = 1, e = sessionStorage.getItem("address"), n = this.$web3, a = $web3.utils.toWei(String(this.aif), "Mwei"), i = new n.eth.Contract(st, this.StakeContract), i.methods.deposit(0, BigInt(a)).send({
                                            from: e
                                        }).on("transactionHash", function() {
                                            var t = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                                                return regeneratorRuntime.wrap(function(t) {
                                                    while (1) switch (t.prev = t.next) {
                                                        case 0:
                                                            e && (s.stake = 0, s.$message({
                                                                message: "Stake Success...",
                                                                type: "success"
                                                            }));
                                                        case 1:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }, t)
                                            }));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()).catch(function(t) {
                                            s.$message.error(t), s.stake = 0
                                        })) : this.$message("Wrong quantity...");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    ClaimRew: function() {
                        var t = this,
                            e = sessionStorage.getItem("address");
                        if (e) {
                            this.claim = 1;
                            var n = this.$web3,
                                a = $web3.utils.toWei(String(this.mySatkeNums), "Mwei"),
                                i = new n.eth.Contract(st, this.StakeContract);
                            i.methods.withdraw(0, BigInt(a)).send({
                                from: e
                            }).on("transactionHash", function() {
                                var e = Object(o["a"])(regeneratorRuntime.mark(function e(n) {
                                    return regeneratorRuntime.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                n && (t.claim = 0, t.$message({
                                                    message: "Claim Success...",
                                                    type: "success"
                                                }));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                }));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch(function(e) {
                                t.$message.error(e), t.claim = 0
                            })
                        } else this.$message("Please connect the wallet...")
                    },
                    buy: function() {
                        window.open("https://app.camelot.exchange/?token1=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&token2=0x09E18590E8f76b6Cf471b3cd75fE1A1a9D2B2c2b", "_blank")
                    }
                }
            },
            rt = ut,
            ot = (n("9d19"), Object(c["a"])(rt, at, it, !1, null, "c0057124", null)),
            lt = ot.exports,
            pt = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "cont"
                }, [a("div", {
                    staticClass: "banner"
                }, [a("div", {
                    staticClass: "txt"
                }, [a("div", {
                    staticClass: "dec"
                }, [t._v("\n\t\t\t\tThe Floki Inu animals can be staked, used for mining, and have many more use cases in the Aifloki\n\t\t\t\tecosystem to earn you more Aifloki tokens and Arb. Here, you can use Aifloki tokens to build your\n\t\t\t\tFloki Inu team and randomly acquire Floki Inus of level 1-3.\n\t\t\t")]), a("div", {
                    staticClass: "oper"
                }, [a("el-button", {
                    staticClass: "btn",
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.soon
                    }
                }, [t._v("Mint Now")])], 1)])]), a("div", {
                    staticClass: "nfts"
                }, [a("el-row", {
                    attrs: {
                        gutter: 20
                    }
                }, [a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("5a93")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tPostman\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("1e65")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tAstronaut\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("d0a0")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tBirthday\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("675d")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tGentleman\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("9dcf")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tFeckless\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("3bc9")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tIce Cream\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("eae8")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tCowboy\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("a8f2")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tMachinery\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("f3cc")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tDemon\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("2a27")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tDuke\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("225e")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tWar Knight\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("5883")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tZombie\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("f671")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tStarry Wizard\n\t\t\t\t\t")])])]), a("el-col", {
                    attrs: {
                        lg: 6,
                        md: 6,
                        sm: 12,
                        xs: 12
                    }
                }, [a("div", {
                    staticClass: "nft"
                }, [a("img", {
                    staticClass: "dog",
                    attrs: {
                        src: n("7da1")
                    }
                }), a("div", {
                    staticClass: "info"
                }, [t._v("\n\t\t\t\t\t\tICE\n\t\t\t\t\t")])])])], 1)], 1)])
            },
            ct = [],
            dt = {
                data: function() {
                    return {}
                },
                methods: {
                    soon: function() {
                        this.$message("Coming soon...")
                    }
                }
            },
            yt = dt,
            mt = (n("c378"), Object(c["a"])(yt, pt, ct, !1, null, "3948332c", null)),
            vt = mt.exports;
        a["default"].use(E["a"]);
        var bt = new E["a"]({
                mode: "history",
                routes: [{
                    path: "/",
                    component: W
                }, {
                    path: "/home",
                    component: W
                }, {
                    path: "/lp",
                    component: z
                }, {
                    path: "/earn",
                    component: lt
                }, {
                    path: "/luck",
                    component: nt
                }, {
                    path: "/nft",
                    component: vt
                }]
            }),
            ft = n("5c96"),
            gt = n.n(ft),
            Ct = (n("0fae"), n("c0d8")),
            Tt = n.n(Ct),
            wt = {
                install: function(t, e) {
                    var n;
                    window.ethereum ? (n = new Tt.a(window.ethereum), window.ethereum.enable()) : window.web3 ? n = new Tt.a(window.web3.currentProvider) : console.log("Non-Ethereum browser detected.You should consider trying MeatMask!"), t.prototype.$web3 = n, window.$web3 = n
                }
            },
            ht = wt;
        n("41fa");
        gt.a.Dialog.props.lockScroll.default = !1, a["default"].config.productionTip = !1, a["default"].prototype.$http = B["a"], a["default"].use(gt.a), a["default"].use(ht), new a["default"]({
            render: function(t) {
                return t(F)
            },
            router: bt
        }).$mount("#app")
    },
    5712: function(t, e, n) {
        t.exports = n.p + "img/right.18728de4.png"
    },
    5883: function(t, e, n) {
        t.exports = n.p + "img/dog12.e6456fb9.png"
    },
    "5a93": function(t, e, n) {
        t.exports = n.p + "img/dog1.16d21a40.png"
    },
    "5d2b": function(t, e, n) {},
    "640d": function(t) {
        t.exports = [{
            inputs: [{
                internalType: "contract IERC20",
                name: "_backToken",
                type: "address"
            }, {
                internalType: "address",
                name: "_factory",
                type: "address"
            }, {
                internalType: "address",
                name: "_swapRouter",
                type: "address"
            }, {
                internalType: "address",
                name: "_weth",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "ethAmount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256"
            }],
            name: "AddLiquidity",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "burn",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "gov1",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "gov2",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "jackpot",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "bonus",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "dev",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256"
            }],
            name: "SwapBack",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address"
            }, {
                indexed: !1,
                internalType: "address",
                name: "pair",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "side",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "circulatingSupply",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256"
            }],
            name: "Trade",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            inputs: [],
            name: "addLiquidityEnabled",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "pair",
                type: "address"
            }],
            name: "addPair",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "backToken",
            outputs: [{
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "bonusFeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "bonusFeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "burnFeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "burnFeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "canAddLiquidityBeforeLaunch",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "clearStuckBalance",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "clearStuckEthBalance",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }],
            name: "decreaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "pair",
                type: "address"
            }],
            name: "delPair",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "devFeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "devFeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "doSwapBack",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "feeDenominator",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getCirculatingSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getMinterLength",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }],
            name: "getPair",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gov1Fee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gov1FeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gov1FeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gov2Fee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gov2FeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gov2FeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "inSwap",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            }],
            name: "increaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "initializePair",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "isFeeExempt",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "isPair",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "jackpotFeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "jackpotFeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "jackpotWallet",
            outputs: [{
                internalType: "contract IJackpot",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "launch",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "launchedAt",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "launchedAtTimestamp",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "liquidityFeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "liquidityFeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }],
            name: "rescueToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "bool",
                name: "_enabled",
                type: "bool"
            }],
            name: "setAddLiquidityEnabled",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_gov1Fee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_gov2Fee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_liquidityFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_jackpotFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_bonusFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_devFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_burnFee",
                type: "uint256"
            }],
            name: "setBuyFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_gov1Wallet",
                type: "address"
            }, {
                internalType: "address",
                name: "_gov2Wallet",
                type: "address"
            }, {
                internalType: "address",
                name: "_bonusWallet",
                type: "address"
            }, {
                internalType: "address",
                name: "_jackpotWallet",
                type: "address"
            }, {
                internalType: "address",
                name: "_devWallet",
                type: "address"
            }],
            name: "setFeeReceivers",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "holder",
                type: "address"
            }, {
                internalType: "bool",
                name: "exempt",
                type: "bool"
            }],
            name: "setIsFeeExempt",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_gov1Fee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_gov2Fee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_liquidityFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_jackpotFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_bonusFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_devFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_burnFee",
                type: "uint256"
            }],
            name: "setSellFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "bool",
                name: "_enabled",
                type: "bool"
            }],
            name: "setSwapBackSettings",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "swapEnabled",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalFeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalFeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                internalType: "address",
                name: "recipient",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            stateMutability: "payable",
            type: "receive"
        }]
    },
    "64a9": function(t, e, n) {},
    6576: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABQVBMVEUAAADv7+/z8/Px8fHz8/Py8vLx8fHx8fHy8vLy8vLy8vLy8vLv7+/y8vLy8vL09PT09PTv7+/v7+/z8/Px8fHx8fHx8fHv7+/x8fHv7+/y8vLk5OTa2tqsrK1sbGzPz8+Cg4QvMDDBwcGQkZFHSEi6u7uJios7PDxgYGDIyMnm5ua1tbXr6+t4eXpWV1gSEhIpKiqlpqZucHBISEk0NTUAAAAjJCQMDAwdHh59fn9gYWE+Pz8GBgZbXF05OjoYGBjNzc2XmJipqamLjI3AwcFjZGQ9PT3FxcWrq6tLTU0eHh6mpqaTlJQPDw95eXnj4+N7fHzU1NS6urvk5OWRkZHBwcKQkZLIycmdnZ1MTEx4eXmsra23t7eFhYVISEjW1tafn5+IiIjOzs6zs7Td3d1bW1tTVFQ8PDycnZ2en5////8SUbTDAAAAGnRSTlMAEEBwj6/P3++/YJ8gUN9vXzBAz5CwoGDvULhlmX0AAAABYktHRGolYpUOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QEaDQYVu8Zu5AAABFRJREFUaN6tmttC00AQhpOGNm1aKq3l4DZoQinlpICmCiJoUVEUPHFS1KKigu//AqZN0qZtuvPvhrnqRTJfd/7Z2dndKApkakIbSab0NHMtrWeSI1pCVa7LVCOrswhLZY3cNXjXMoxjmZiMBNe7Z8lR+T+fZ5DlDSn/N9IMNglEIs+ETBCRSzJhywrIPZZmEgYPQh1hkjYCTb5cnklbHghTIc1iWL5Ahp/FtDEi+Vls0+L5L5txCEB8pm/HiFKBfveOZc/QTxXk87Ni2bP0U+nIbFUB/1XLsu0KkK1RMw6Yv+W5FqBmAnN60L8BZOC01QLY8zLTARFgwfIAiM4DMmQZorAPmF0EVlLxAFWtAIDozIo9ACBAZasLQHTOyygcACCdNbEBLFhhAKSzKjSASi8A0VkTGUDV6gVA8znwPworHAIgOgeJlIQVDgEQnTP+JMYVDgMQnVVU4koUANDZkzmDK9wDAHTOYBEqW9EAQGcVitD0EACgs4HU0QVrGMBeIjtiF3CTeGa5MhxA6uzONVVE4X4ArbOqJEQUtu7eW1ntIZjkZNaIJ9ZC7u8/cJx6feWhgM6aUoIVbrlvAer1R+uwziWiEHUU3ni86TgBoF5/sg7qPE7MY1/hja1txwkDXMTTVUTnFH8tKPvKdtx3Aa75ej/j5yl3Q9PohD4K4OvN1TmtEAr3ue8DeHrv8HzwAOXnW5uOwwe09K4tSgJebDsODXARO5IAZr5EALuvuCHi71pf71GAN2/5zRHVsizucwEH795T5ZSq1sz8MByw+9H7F7xFk1Mqyp8OB+MUjo5XhxaPTF6p4BW745NT78d+BCCIzufaDrfYafzV+OSwL06B/y9edGbm7TN+uS5SxfSrh/i2FwYE0flu202Tv+Dwl8xztxgFcfqxFwAOfjI/Om4p+kX1Lfw8vWiV05Pf3Ti5/v94wZ/5i1RrRZngZ2mjXbH9OJl7Tn3Xi4551q7VTbptMejNt2tzVX9q+9E5qrX9X5p040X1Lcf+ohlI0Y7OrL9gXhEv55Dmt9NX+HFi5nywIJ9BGwSqcQm1dtX2xK0F/ptUV+QddJK93Xm3dTk57UQH2YL45wnkBuFCcn8w7u/RimQX3ogCNMnXOgf/OnJQ1A+4JLcfemefrJH/5XgQcEW+1D3LVunT3rV+wBnDB4AMYbnvKKFpCgwAUaGTq/AmWe85L6ITKchV+KSi7zYBOE5odAF0hrbraM+hIK2zl6tYhjJ94Gx2kmG5imUoi7huKdFv/fMAdIa6zUTE0bIO5SqUoXrkZQ4gw3kLsCQhAHy8f2EhGTr0IocWernRlBIYLxnxrlgQQjz/0HSQjo+vtB7H/VQBuGqMQdChG1m1JOu/hH6pYEgNYkrgzjo3Ie4/KfZ9gugg9KLwrb4IYkqT+i4BReia9Gcot4CVNFNU4ljO4H96ol3DNzQ5YyIVGZns5DV+oVPUSsmMPtVWVE8lS1oRdP4fit86TpZKIhwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMjZUMTM6MDQ6NTIrMDA6MDC9qknGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTI2VDEzOjA0OjUyKzAwOjAwzPfxegAAAABJRU5ErkJggg=="
    },
    "675d": function(t, e, n) {
        t.exports = n.p + "img/dog4.ae1ec02e.png"
    },
    "682e": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAADKElEQVR4nO3dsW1jUQxEUbECuxR3sFu62YFKsSvwPoBSYIA7qX5wDkCwghtP3YD/EggEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAguEQgPz8/H+e9nYOn76q6n/9SVwnk83a7/TkHT11Vf28vJhCuqksgQyAsugQyBMKiSyBDICy6BDIEwqJLIEMgLLoEMgTCoksgQyAsugQyBMKiSyBDICy6BDIEwqJLIEMgLLoEMgTCoksgQyAsugQyBMKiSyDjBPJx3vs5ePo6gdzPf6lLBAJXJRAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEgksE8hjQeTsHT98GdB5OIJ83E2z81mWCbQiERZdAhkBYdAlkCIRFl0CGQFh0CWQIhEWXQIZAWHQJZAiERZdAhkBYdAlkCIRFl0CGQFh0CWQIhEWXQIZAWHQJZAiERZdAhkBYdAlkCIRFl0DGCeTjvPdz8PR1Armf/1KXCASuSiAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBJcI5DGg83YOnr4N6DycQD5vJtj4rcsE2xAIiy6BDIGw6BLIEAiLLoEMgbDoEsgQCIsugQyBsOgSyBAIiy6BDIGw6BLIEAiLLoEMgbDoEsgQCIsugQyBsOgSyBAIiy6BDIGw6BLIEAiLLoGME8jHee/n4OnrBHI//6UuEQhclUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCwT97RA7YRQzb7wAAAABJRU5ErkJggg=="
    },
    6917: function(t) {
        t.exports = [{
            inputs: [{
                internalType: "contract IERC20",
                name: "_rewardToken",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_rewardPerSecond",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_startTime",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_bonusEndTime",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_maxStakingPerUser",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "Deposit",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "EmergencyWithdraw",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "rewards",
                type: "uint256"
            }],
            name: "Withdraw",
            type: "event"
        }, {
            inputs: [],
            name: "BONUS_MULTIPLIER",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "LpOfPid",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_allocPoint",
                type: "uint256"
            }, {
                internalType: "address",
                name: "_token",
                type: "address"
            }, {
                internalType: "bool",
                name: "_withUpdate",
                type: "bool"
            }],
            name: "add",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "val",
                type: "address"
            }],
            name: "addCaller",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "bonusEndTime",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "caller",
                type: "address"
            }],
            name: "delCaller",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_pid",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "deposit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "emergencyRewardWithdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_pid",
                type: "uint256"
            }],
            name: "emergencyWithdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "getAllPoolViews",
            outputs: [{
                components: [{
                    internalType: "uint256",
                    name: "pid",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "allocPoint",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "lastRewardTime",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "rewardsPerSecond",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "accRewardPerShare",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "totalAmount",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "string",
                    name: "symbol",
                    type: "string"
                }, {
                    internalType: "string",
                    name: "name",
                    type: "string"
                }, {
                    internalType: "uint8",
                    name: "decimals",
                    type: "uint8"
                }, {
                    internalType: "uint256",
                    name: "startTime",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "bonusEndTime",
                    type: "uint256"
                }],
                internalType: "struct DogeBonusPool.PoolView[]",
                name: "",
                type: "tuple[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getCallers",
            outputs: [{
                internalType: "address[]",
                name: "ret",
                type: "address[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_from",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_to",
                type: "uint256"
            }],
            name: "getMultiplier",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "pid",
                type: "uint256"
            }],
            name: "getPoolView",
            outputs: [{
                components: [{
                    internalType: "uint256",
                    name: "pid",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "allocPoint",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "lastRewardTime",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "rewardsPerSecond",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "accRewardPerShare",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "totalAmount",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "string",
                    name: "symbol",
                    type: "string"
                }, {
                    internalType: "string",
                    name: "name",
                    type: "string"
                }, {
                    internalType: "uint8",
                    name: "decimals",
                    type: "uint8"
                }, {
                    internalType: "uint256",
                    name: "startTime",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "bonusEndTime",
                    type: "uint256"
                }],
                internalType: "struct DogeBonusPool.PoolView",
                name: "",
                type: "tuple"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "token",
                type: "address"
            }, {
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "getUserView",
            outputs: [{
                components: [{
                    internalType: "uint256",
                    name: "stakedAmount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "unclaimedRewards",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "lpBalance",
                    type: "uint256"
                }],
                internalType: "struct DogeBonusPool.UserView",
                name: "",
                type: "tuple"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "getUserViews",
            outputs: [{
                components: [{
                    internalType: "uint256",
                    name: "stakedAmount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "unclaimedRewards",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "lpBalance",
                    type: "uint256"
                }],
                internalType: "struct DogeBonusPool.UserView[]",
                name: "",
                type: "tuple[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "injectRewards",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "rewardsSeconds",
                type: "uint256"
            }],
            name: "injectRewardsWithTime",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "massUpdatePools",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "maxStakingPerUser",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_pid",
                type: "uint256"
            }, {
                internalType: "address",
                name: "_user",
                type: "address"
            }],
            name: "pendingReward",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "poolInfo",
            outputs: [{
                internalType: "contract IERC20",
                name: "token",
                type: "address"
            }, {
                internalType: "uint256",
                name: "allocPoint",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "totalDeposit",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "lastRewardTime",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "accRewardsPerShare",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "rewardPerSecond",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "rewardToken",
            outputs: [{
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_pid",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_allocPoint",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "_withUpdate",
                type: "bool"
            }],
            name: "set",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "setMaxStakingPerUser",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "interval",
                type: "uint256"
            }],
            name: "setStandardRewardInterval",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "standardRewardInterval",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "startTime",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "stopReward",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "multiplierNumber",
                type: "uint256"
            }],
            name: "updateMultiplier",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_pid",
                type: "uint256"
            }],
            name: "updatePool",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "userInfo",
            outputs: [{
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "rewardDebt",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_pid",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }]
    },
    "76a5": function(t, e, n) {
        t.exports = n.p + "img/ok.6411c31d.svg"
    },
    7852: function(t, e, n) {},
    "7da1": function(t, e, n) {
        t.exports = n.p + "img/dog14.5b2a7c57.png"
    },
    "7e7f": function(t, e, n) {},
    "88a8": function(t, e, n) {
        t.exports = n.p + "img/bk.cb1310d8.svg"
    },
    "89ee": function(t) {
        t.exports = [{
            inputs: [{
                internalType: "contract IERC20",
                name: "_backToken",
                type: "address"
            }, {
                internalType: "address",
                name: "_factory",
                type: "address"
            }, {
                internalType: "address",
                name: "_swapRouter",
                type: "address"
            }, {
                internalType: "address",
                name: "_weth",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "ethAmount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256"
            }],
            name: "AddLiquidity",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "burn",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "gov1",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "gov2",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "jackpot",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "bonus",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "dev",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256"
            }],
            name: "SwapBack",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address"
            }, {
                indexed: !1,
                internalType: "address",
                name: "pair",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "side",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "circulatingSupply",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256"
            }],
            name: "Trade",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            inputs: [],
            name: "addLiquidityEnabled",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "pair",
                type: "address"
            }],
            name: "addPair",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "backToken",
            outputs: [{
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "bonusFeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "bonusFeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "burnFeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "burnFeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "canAddLiquidityBeforeLaunch",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "clearStuckBalance",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "clearStuckEthBalance",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }],
            name: "decreaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "pair",
                type: "address"
            }],
            name: "delPair",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "devFeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "devFeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "doSwapBack",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "feeDenominator",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getCirculatingSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getMinterLength",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }],
            name: "getPair",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gov1Fee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gov1FeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gov1FeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gov2Fee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gov2FeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gov2FeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "inSwap",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            }],
            name: "increaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "initializePair",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "isFeeExempt",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "isPair",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "jackpotFeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "jackpotFeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "jackpotWallet",
            outputs: [{
                internalType: "contract IJackpot",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "launch",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "launchedAt",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "launchedAtTimestamp",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "liquidityFeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "liquidityFeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }],
            name: "rescueToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "bool",
                name: "_enabled",
                type: "bool"
            }],
            name: "setAddLiquidityEnabled",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_gov1Fee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_gov2Fee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_liquidityFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_jackpotFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_bonusFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_devFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_burnFee",
                type: "uint256"
            }],
            name: "setBuyFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_gov1Wallet",
                type: "address"
            }, {
                internalType: "address",
                name: "_gov2Wallet",
                type: "address"
            }, {
                internalType: "address",
                name: "_bonusWallet",
                type: "address"
            }, {
                internalType: "address",
                name: "_jackpotWallet",
                type: "address"
            }, {
                internalType: "address",
                name: "_devWallet",
                type: "address"
            }],
            name: "setFeeReceivers",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "holder",
                type: "address"
            }, {
                internalType: "bool",
                name: "exempt",
                type: "bool"
            }],
            name: "setIsFeeExempt",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_gov1Fee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_gov2Fee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_liquidityFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_jackpotFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_bonusFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_devFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_burnFee",
                type: "uint256"
            }],
            name: "setSellFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "bool",
                name: "_enabled",
                type: "bool"
            }],
            name: "setSwapBackSettings",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "swapEnabled",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalFeeBuy",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalFeeSell",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                internalType: "address",
                name: "recipient",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            stateMutability: "payable",
            type: "receive"
        }]
    },
    "8b42": function(t, e, n) {
        t.exports = n.p + "img/godf.7d268b9a.png"
    },
    "8d5f": function(t, e, n) {
        t.exports = n.p + "img/tuite.f214f41c.png"
    },
    9207: function(t, e, n) {
        t.exports = n.p + "img/left.d0128e1c.png"
    },
    "9d19": function(t, e, n) {
        "use strict";
        var a = n("1907"),
            i = n.n(a);
        i.a
    },
    "9dcf": function(t, e, n) {
        t.exports = n.p + "img/dog5.50873943.png"
    },
    a179: function(t, e, n) {
        "use strict";
        var a = n("0fde"),
            i = n.n(a);
        i.a
    },
    a8f2: function(t, e, n) {
        t.exports = n.p + "img/dog8.354a1937.png"
    },
    aa06: function(t, e, n) {
        t.exports = n.p + "img/line.c0c6dc19.png"
    },
    c2ea: function(t, e, n) {
        t.exports = n.p + "img/telegram.c9203e3d.png"
    },
    c378: function(t, e, n) {
        "use strict";
        var a = n("7852"),
            i = n.n(a);
        i.a
    },
    c7c0: function(t, e, n) {},
    c9e7: function(t, e, n) {
        "use strict";
        var a = n("7e7f"),
            i = n.n(a);
        i.a
    },
    cf05: function(t, e, n) {
        t.exports = n.p + "img/logo.407e049c.png"
    },
    d06b: function(t, e, n) {
        "use strict";
        var a = n("dd20"),
            i = n.n(a);
        i.a
    },
    d0a0: function(t, e, n) {
        t.exports = n.p + "img/dog3.0825514c.png"
    },
    d515: function(t, e, n) {
        "use strict";
        var a = n("5d2b"),
            i = n.n(a);
        i.a
    },
    dd20: function(t, e, n) {},
    eae8: function(t, e, n) {
        t.exports = n.p + "img/dog7.194c2b69.png"
    },
    f3cc: function(t, e, n) {
        t.exports = n.p + "img/dog9.562010c5.png"
    },
    f671: function(t, e, n) {
        t.exports = n.p + "img/dog13.c05312d4.png"
    },
    fb4c: function(t, e, n) {
        "use strict";
        var a = n("1282"),
            i = n.n(a);
        i.a
    }
});
//# sourceMappingURL=app.aca10d25.js.map