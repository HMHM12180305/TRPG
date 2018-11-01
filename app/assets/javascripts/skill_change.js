var obj= {
    str: ['str_tmp','str_inc',1],
    con: ['con_tmp','con_inc',2],
    pow: ['pow_tmp','pow_inc',3],
    dex: ['dex_tmp','dex_inc',4],
    app: ['app_tmp','app_inc',5],
    siz: ['siz_tmp','siz_inc',6],
    int: ['int_tmp','int_inc',7],
    edu: ['edu_tmp','edu_inc',8],
    hp: ['hp_tmp','hp_inc',9],
    mp: ['mp_tmp','mp_inc',10],
    san: ['san_tmp','san_inc',11],
    idea: ['idea_tmp','idea_inc',12],
    luck: ['luck_tmp','luck_inc',13],
    know: ['know_tmp','know_inc',14],

    };
Object.keys(obj).forEach(function(key) {
    var val = this[key]; // this は obj
    // console.log(key, val);
    for(let i = 0; i < val.length; i++) {
        let tmp = "#" + val[i]
        $(tmp).change(function(){
            console.log(tmp)
            console.log($(tmp))
            console.log(val[2])
            document.getElementById("status_table").rows[4].cells[val[2]].innerHTML = Number(document.getElementById("status_table").rows[1].cells[val[2]].innerHTML) + Number(document.getElementById(val[1]).value) + Number(document.getElementById(val[0]).value)
        });
    }
}, obj);

var buttle= {
    avoid: ['avoid_ist','avoid_pro',1],
    kick: ['kick_ist','kick_pro',2],
    kumituki: ['kumituki_ist','kumituki_pro',3],
    kobusi: ['kobusi_ist','kobusi_pro',4],
    dutuki: ['dutuki_ist','dutuki_pro',5],
    touteki: ['touteki_ist','touteki_pro',6],
    masharu: ['masharu_ist','masharu_pro',7],
    kenjyuu: ['kenjyuu_ist','kenjyuu_pro',8],
    sabumasi: ['sabumasi_ist','sabumasi_pro',9],
    shottogun: ['shottogun_ist','shottogun_pro',10],
    masingun: ['masingun_ist','masingun_pro',11],
    raihuru: ['raihuru_ist','raihuru_pro',12],

};

Object.keys(buttle).forEach(function(key) {
    var val = this[key]; // this は obj
    // console.log(key, val);
    for(let i = 0; i < val.length; i++) {
        let tmp = "#" + val[i]
        $(tmp).change(function(){
            console.log(tmp)
            console.log($(tmp))
            console.log(val[2])
            document.getElementById("buttle_table").rows[val[2]].cells[6].innerHTML = Number(document.getElementById("buttle_table").rows[val[2]].cells[1].innerHTML) + Number(document.getElementById(val[1]).value) + Number(document.getElementById(val[0]).value)
        });
    }
}, buttle);

var search= {
    oukyuu: ['oukyuu_ist','oukyuu_pro',1],
    kagi: ['kagi_ist','kagi_pro',2],
    kakusu: ['kakusu_ist','kakusu_pro',3],
    kakureru: ['kakureru_ist','kakureru_pro',4],
    kikimimi: ['kikimimi_ist','kikimimi_pro',5],
    sinobi: ['sinobi_ist','sinobi_pro',6],
    shasin: ['shasin_ist','shasin_pro',7],
    seisin: ['seisin_ist','seisin_pro',8],
    tuiseki: ['tuiseki_ist','tuiseki_pro',9],
    touhan: ['touhan_ist','touhan_pro',10],
    toshokan: ['toshokan_ist','toshokan_pro',11],
    mebosi: ['mebosi_ist','mebosi_pro',12],

};

Object.keys(search).forEach(function(key) {
    var val = this[key]; // this は obj
    // console.log(key, val);
    for(let i = 0; i < val.length; i++) {
        let tmp = "#" + val[i]
        $(tmp).change(function(){
            console.log(tmp)
            console.log($(tmp))
            console.log(val[2])
            document.getElementById("search_table").rows[val[2]].cells[6].innerHTML = Number(document.getElementById("search_table").rows[val[2]].cells[1].innerHTML) + Number(document.getElementById(val[1]).value) + Number(document.getElementById(val[0]).value)
        });
    }
}, search);

var act= {
    unten: ['unten_ist','unten_pro',1],
    shuri: ['shuri_ist','shuri_pro',2],
    sousa: ['sousa_ist','sousa_pro',3],
    jyouba: ['jyouba_ist','jyouba_pro',4],
    suiei: ['suiei_ist','suiei_pro',5],
    seisaku: ['seisaku_ist','seisaku_pro',6],
    soujyuu: ['soujyuu_ist','soujyuu_pro',7],
    tyouyaku: ['tyouyaku_ist','tyouyaku_pro',8],
    denki: ['denki_ist','denki_pro',9],
    nabi: ['nabi_ist','nabi_pro',10],
    hensou: ['hensou_ist','hensou_pro',11],

};

Object.keys(act).forEach(function(key) {
    var val = this[key]; // this は obj
    // console.log(key, val);
    for(let i = 0; i < val.length; i++) {
        let tmp = "#" + val[i]
        $(tmp).change(function(){
            console.log(tmp)
            console.log($(tmp))
            console.log(val[2])
            document.getElementById("act_table").rows[val[2]].cells[6].innerHTML = Number(document.getElementById("act_table").rows[val[2]].cells[1].innerHTML) + Number(document.getElementById(val[1]).value) + Number(document.getElementById(val[0]).value)
        });
    }
}, act);

var neg= {
    iiku: ['iiku_ist','iiku_pro',1],
    sinyou: ['sinyou_ist','sinyou_pro',2],
    settoku: ['settoku_ist','settoku_pro',3],
    negiri: ['negiri_ist','negiri_pro',4],
    native: ['native_ist','native_pro',5],
    first: ['first_ist','first_pro',6],
    second: ['second_ist','second_pro',7],


};

Object.keys(neg).forEach(function(key) {
    var val = this[key]; // this は obj
    // console.log(key, val);
    for(let i = 0; i < val.length; i++) {
        let tmp = "#" + val[i]
        $(tmp).change(function(){
            console.log(tmp)
            console.log($(tmp))
            console.log(val[2])
            document.getElementById("neg_table").rows[val[2]].cells[6].innerHTML = Number(document.getElementById("neg_table").rows[val[2]].cells[1].innerHTML) + Number(document.getElementById(val[1]).value) + Number(document.getElementById(val[0]).value)
        });
    }
}, neg);

var know= {
    igaku: ['igaku_ist','igaku_pro',1],
    okaruto: ['okaruto_ist','okaruto_pro',2],
    kagaku: ['kagaku_ist','kagaku_pro',3],
    coc: ['coc_ist','coc_pro',4],
    art: ['art_ist','art_pro',5],
    keiri: ['keiri_ist','keiri_pro',6],
    kouko: ['kouko_ist','kouko_pro',7],
    comp: ['comp_ist','comp_pro',8],
    sinri: ['sinri_ist','sinri_pro',9],
    human: ['human_ist','human_pro',10],
    seibutu: ['seibutu_ist','seibutu_pro',11],
    tisitu: ['tisitu_ist','tisitu_pro',12],
    densi: ['densi_ist','densi_pro',13],
    tenmon: ['tenmon_ist','tenmon_pro',14],
    hakubutu: ['hakubutu_ist','hakubutu_pro',15],
    buturi: ['buturi_ist','buturi_pro',16],
    houritu: ['houritu_ist','houritu_pro',17],
    yakugaku: ['yakugaku_ist','yakugaku_pro',18],
    rekisi: ['rekisi_ist','rekisi_pro',19],

};

Object.keys(know).forEach(function(key) {
    var val = this[key]; // this は obj
    // console.log(key, val);
    for(let i = 0; i < val.length; i++) {
        let tmp = "#" + val[i]
        $(tmp).change(function(){
            console.log(tmp)
            console.log($(tmp))
            console.log(val[2])
            document.getElementById("know_table").rows[val[2]].cells[6].innerHTML = Number(document.getElementById("know_table").rows[val[2]].cells[1].innerHTML) + Number(document.getElementById(val[1]).value) + Number(document.getElementById(val[0]).value)
        });
    }
}, know);