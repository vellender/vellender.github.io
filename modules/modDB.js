var modules = [{
        "code":"MA10110",
        "level":1,
        "semester":1,
        "title":"Geometry",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":[],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA10310",
        "level":1,
        "semester":1,
        "title":"Probability",
        "credits": 10,
        "coordinator": "",
        "category": "S",
        "preReq":[],
        "preReqType":[],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA10510",
        "level":1,
        "semester":1,
        "title":"Algebra",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":[],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MP10610",
        "level":1,
        "semester":1,
        "title":"Calculus",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":[],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"PM14010",
        "level":1,
        "semester":1,
        "title":"Classical Dynamics",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":[],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA15110",
        "level":1,
        "semester":1,
        "title":"Games, Puzzles, and Strategies I",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":[],
        "preReqType":"single",
        "hasMT":false
    }, {
        "code":"MP11010",
        "level":1,
        "semester":2,
        "title":"Further Algebra and Calculus",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":["MA10510","MP10610"],
        "preReqType":"all",
        "hasMT":true
    }, {
        "code":"MA11110",
        "level":1,
        "semester":2,
        "title":"Mathematical Analysis",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":["MA10510","MP10610"],
        "preReqType":"all",
        "hasMT":true
    }, {
        "code":"MA11210",
        "level":1,
        "semester":2,
        "title":"Differential Equations",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":["MA10510","MP10610"],
        "preReqType":"all",
        "hasMT":true
    }, {
        "code":"MA11310",
        "level":1,
        "semester":2,
        "title":"Statistics",
        "credits": 10,
        "coordinator": "",
        "category": "S",
        "preReq":["MA10310"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MP12910",
        "level":1,
        "semester":2,
        "title":"Career Planning and Skills Development",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":[],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA15210",
        "level":1,
        "semester":2,
        "title":"Games, Puzzles, and Strategies II",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":[],
        "preReqType":"single",
        "hasMT":false
    }, {    //YEAR TWO
        "code":"MA20110",
        "level":2,
        "semester":1,
        "title":"Real Analysis",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":["MA11110"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA20310",
        "level":2,
        "semester":1,
        "title":"Introduction to Abstract Algebra",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":[],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA25220",
        "level":2,
        "semester":0,
        "title":"Introduction to Numerical Analysis and its applications",
        "credits": 20,
        "coordinator": "",
        "category": "A",
        "preReq":["MA11110"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA26010",
        "level":2,
        "semester":1,
        "title":"Distributions and Estimation",
        "credits": 10,
        "coordinator": "",
        "category": "S",
        "preReq":["MA11310"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA26620",
        "level":2,
        "semester":0,
        "title":"Applied Statistics",
        "credits": 20,
        "coordinator": "",
        "category": "S",
        "preReq":["MA10310","MA11310"],
        "preReqType":"all",
        "hasMT":false
    }, {
        "code":"MA21410",
        "level":2,
        "semester":2,
        "title":"Linear Algebra",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":[],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA21510",
        "level":2,
        "semester":2,
        "title":"Complex Analysis",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":["MA11110"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA25610",
        "level":2,
        "semester":2,
        "title":"Hydrodynamics 1",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":["PM26020"],
        "preReqType":"single",
        "hasMT":false
    }, {
        "code":"MA25710",
        "level":2,
        "semester":2,
        "title":"Advanced Dynamics",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":["MP11010"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"PM26020",
        "level":2,
        "semester":1,
        "title":"Mathematical Physics",
        "credits": 20,
        "coordinator": "",
        "category": "A",
        "preReq":["MP10610","MA11210"],
        "preReqType":"all",
        "hasMT":true
    }, {
        "code":"MA30110",
        "level":3,
        "semester":1,
        "title":"Group Theory",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":["MA20310"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA30210",
        "level":3,
        "semester":1,
        "title":"Norms and Differential Equations",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":["MA11110","MA21410"],
        "preReqType":"all",
        "hasMT":true
    }, {
        "code":"MA30510",
        "level":3,
        "semester":1,
        "title":"Differential Geometry of Curves and Surfaces",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":["MA25220","PM26020"],
        "preReqType":"either",
        "hasMT":true
    }, {
        "code":"MA33410",
        "level":3,
        "semester":1,
        "title":"Theory of Elasticity",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":["MA11210","PM26020"],
        "preReqType":"all",
        "hasMT":true
    }, {
        "code":"MA34110",
        "level":3,
        "semester":1,
        "title":"Partial Differential Equations",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":["MA21410"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA34610",
        "level":3,
        "semester":1,
        "title":"Hydrodynamics II",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":["MA25610"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA35810",
        "level":3,
        "semester":1,
        "title":"Information Theory",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":["MA26010"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA36510",
        "level":3,
        "semester":1,
        "title":"Linear Statistical Models",
        "credits": 10,
        "coordinator": "",
        "category": "S",
        "preReq":["MA26010"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA37810",
        "level":3,
        "semester":1,
        "title":"Stochastic Models in Finance",
        "credits": 10,
        "coordinator": "",
        "category": "S",
        "preReq":["MA26010"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MT39020",
        "level":3,
        "semester":1,
        "title":"Cyflwyniad i Addysgu Mathemateg mewn Ysgol Uwchradd",
        "credits": 20,
        "coordinator": "",
        "category": "A",
        "preReq":[],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA32410",
        "level":3,
        "semester":2,
        "title":"Graphs and Networks",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":[],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA34210",
        "level":3,
        "semester":2,
        "title":"Asymptotic Methods in Mechanics",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":["MA34110"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA34710",
        "level":3,
        "semester":2,
        "title":"Numerical Solutions of Partial Differential Equations",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":["MA25220","MA34110"],
        "preReqType":"either",
        "hasMT":true
    }, {
        "code":"MA34810",
        "level":3,
        "semester":2,
        "title":"Mathematical Models of Biological Systems",
        "credits": 10,
        "coordinator": "",
        "category": "A",
        "preReq":[],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA35210",
        "level":3,
        "semester":2,
        "title":"Topics in Biological Statistics",
        "credits": 10,
        "coordinator": "",
        "category": "S",
        "preReq":["MA26620"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA36010",
        "level":3,
        "semester":2,
        "title":"Comparative Statistical Inference",
        "credits": 10,
        "coordinator": "",
        "category": "S",
        "preReq":["MA26010"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA37410",
        "level":3,
        "semester":2,
        "title":"Probability and Stochastic Processes",
        "credits": 10,
        "coordinator": "",
        "category": "S",
        "preReq":["MA26010"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA38010",
        "level":3,
        "semester":2,
        "title":"Spectral Theory",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":["MA30210"],
        "preReqType":"single",
        "hasMT":true
    }, {
        "code":"MA38310",
        "level":3,
        "semester":2,
        "title":"Operator Algebra",
        "credits": 10,
        "coordinator": "",
        "category": "P",
        "preReq":["MA20310","MA30210"],
        "preReqType":"single",
        "hasMT":true
    }]
