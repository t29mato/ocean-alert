// import * as request from 'request';
// import * as iconv from 'iconv-lite';

const contents = `
<!DOCTYPE html>

<html class="no-js" lang="ja" xmlns:fb="http://ogp.me/ns/fb#" xmlns:og="http://ogp.me/ns#">
<head><meta charset="utf-8" /><meta http-equiv="x-ua-compatible" content="ie=edge" /><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" /><span id="AddMeta_DataList1"><span>
        <title>ダイビングスポット情報（岩）</title>
        <meta name="keywords" content="岩" />
        <meta name="description" content="PADIダイブセンター/リゾートがお届けする岩の最新ダイビングスポット情報です。" />
        <meta property="og:url" content="https://www.padi.co.jp/scuba-diving/scuba-vacations/vacation-spotlight/spot.aspx?sptcd=jp_1231" />
        <meta property="og:title" content="ダイビングスポット情報（岩）" />
        <meta property="og:image" content="https://www.padi.co.jp/scuba-diving/scuba-vacations/vacation-spotlight/images/jp_1231" />
        <meta property="og:description" content="PADIダイブセンター/リゾートがお届けする岩の最新ダイビングスポット情報です。" />
        <meta property="og:site_name" content="PADI Japan 公式サイト" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="fb:admins" content="takashi.shigiya" />
        <meta property="fb:app_id" content="174111819323027" />
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@PADI_JP">
        <meta name="twitter:title" content="ダイビングスポット情報（岩）">
        <meta name="twitter:description" content="PADIダイブセンター/リゾートがお届けする岩の最新ダイビングスポット情報です。">
        <meta name="twitter:image" content="https://www.padi.co.jp/scuba-diving/scuba-vacations/vacation-spotlight/images/jp_1231">
    </span></span>
<link rel="stylesheet" href="https://www.padi.co.jp/scuba-diving/assets/css/app.css" /><link rel="stylesheet" href="https://www.padi.co.jp/scuba-diving/assets/css/style.css" /><link rel="stylesheet" href="https://www.padi.co.jp/scuba-diving/assets/css/layout.css" /><link rel="stylesheet" href="https://www.padi.co.jp/scuba-diving/assets/css/slick-theme.css" /><link href="https://www.padi.co.jp/scuba-diving/assets/css/lightbox.css" rel="stylesheet" media="all" type="text/css" />
    <script src="https://www.padi.co.jp/scuba-diving/assets/js/app.js"></script>
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-27543046-1', 'auto');
        ga('send', 'pageview');
    </script>
<title>

</title></head>
<body id="top">
    <div class="search-form-ofcanvas">
        <div class="container">
            <div class="row">
                <div id="search-input" class="col-xs-12">
                    <div class="input-group col-md-12">
                        <form method="post" action="https://www.padi.co.jp/scuba-diving/search/">
                            <input type="text" name="keyword" class="search-query form-control" placeholder="サイト内検索" />
                            <span class="input-group-btn">
                                <button class="btn btn-primary" type="submit">
                                    <span class="glyphicon glyphicon-search"></span>
                                </button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="wrap">

        <div class="navbar-default topnav">
            <div class="container">
                <div class="row vertical-center">

                    <div class="col-xs-5 col-sm-3">
                        <p class="catchcopy">The Way the World Learns to Dive&reg;</p>
                    </div>

                    <div class="col-xs-7 col-sm-9 topnav_group">

                        <div class="sns-btn">
                            <a class="btn btn-primary" href="https://www.facebook.com/PADIJapan" role="button"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a class="btn btn-primary" href="https://twitter.com/PADI_JP" role="button"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <!--a class="btn btn-primary" href="https://www.instagram.com/paditv/" role="button"><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-primary" href="https://line.me/R/ti/p/%40padi_jp" role="button"><i class="fab fa-line"></i></a-->
                            <a class="btn btn-primary" href="https://www.youtube.com/user/PADIProducer01" role="button"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                        </div>

                        <ul class="nav navbar-nav pull-right">
                            <li class="hidden-xs"><a href="https://www.padi.co.jp/scuba-diving/about-padi/contact-us/ask-padi.aspx">お問い合わせ</a></li>
                            <li class="hidden-xs"><a href="https://www.padi.co.jp/pj_pros_site/logon.asp">プロメンバー専用サイト</a></li>
                            <li class="dropdown hidden-xs">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Language <i class="visible-xs-inline-block fa fa-chevron-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu language pull-right" role="menu">
                                    <li>
                                        <h4>SELECT YOUR LANGUAGE</h4>
                                    </li>
                                    <li><a href="https://www.padi.co.jp/scuba-diving/dive-shop-locator/list/?search=lang&obj=001">Stores in Japan (English Speaking)</a></li>
                                    <li><a href="https://www.padi.co.jp/scuba-diving/dive-shop-locator/list/?search=lang&obj=011">&#51068;&#48376;&#51648;&#50669; &#54620;&#44397;&#50612; &#44032;&#45733; &#49828;&#53664;&#50612;</a></li>
                                    <li><a href="https://www.padi.co.jp/scuba-diving/dive-shop-locator/list/?search=lang&obj=012">日本地区提供中文教学的潜店</a></li>
                                    <li><hr><li>
                                    <li><a href="https://www.padi.com">English</a></li>
                                    <li><a href="https://www2.padi.com/scuba/?LangType=1043">Nederlands (Dutch)</a></li>
                                    <li><a href="https://www2.padi.com/scuba/?LangType=1036">Fran&ccedil;ais (French)</a></li>
                                    <li><a href="https://www2.padi.com/scuba/?LangType=1031">Deutch (German)</a></li>
                                    <li><a href="https://www2.padi.com/scuba/?LangType=1040">Italiano (Italian)</a></li>
                                    <li><a href="https://www2.padi.com/scuba/?LangType=1034">Espa&ntilde;ol (Spanish)</a></li>
                                    <li><a href="http://www.padi.co.kr/">Korean</a></li>
                                    <li><a href="http://sp.padi.com.cn/">Chinese (簡体中文)</a></li>
                                    <li><a href="http://td.padi.com.cn/">Chinese (繁體中文)</a></li>
                                </ul>
                            </li>
                            <li><a class="lets-search"><i class="glyphicon glyphicon-search"></i></a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>

        <nav class="navbar yamm navbar-default globalnav">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <ul class="sp-show-menu nav hidden-sm hidden-md hidden-lg">
                        <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/contact-us/ask-padi.aspx">問合せ</a></li>
                        <li><a href="https://www.padi.co.jp/pj_pros_site/logon.asp">プロ用サイト</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Language <i class="visible-xs-inline-block fa fa-chevron-down" aria-hidden="true"></i></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="https://www.padi.co.jp/scuba-diving/dive-shop-locator/list/?search=lang&obj=001">Stores in Japan (English Speaking)</a></li>
                                <li><a href="https://www.padi.co.jp/scuba-diving/dive-shop-locator/list/?search=lang&obj=011">&#51068;&#48376;&#51648;&#50669; &#54620;&#44397;&#50612; &#44032;&#45733; &#49828;&#53664;&#50612;</a></li>
                                <li><a href="https://www.padi.co.jp/scuba-diving/dive-shop-locator/list/?search=lang&obj=012">日本地区提供中文教学的潜店</a></li>
                                <li><hr /></li>
                                <li><a href="https://www.padi.com">English</a></li>
                                <li><a href="https://www2.padi.com/scuba/?LangType=1043">Nederlands (Dutch)</a></li>
                                <li><a href="https://www2.padi.com/scuba/?LangType=1036">Fran&ccedil;ais (French)</a></li>
                                <li><a href="https://www2.padi.com/scuba/?LangType=1031">Deutch (German)</a></li>
                                <li><a href="https://www2.padi.com/scuba/?LangType=1040">Italiano (Italian)</a></li>
                                <li><a href="https://www2.padi.com/scuba/?LangType=1034">Espa&ntilde;ol (Spanish)</a></li>
                                <li><a href="http://www.padi.co.kr/">Korean</a></li>
                                <li><a href="http://sp.padi.com.cn/">Chinese (簡体中文)</a></li>
                                <li><a href="http://td.padi.com.cn/">Chinese (繁體中文)</a></li>
                            </ul>
                        </li>
                    </ul>
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <h1><a class="navbar-brand" href="https://www.padi.co.jp">
                        <img class="brand-logo" src="https://www.padi.co.jp/scuba-diving/assets/img/padi-logo.png" alt="PADI"></a>
                    </h1>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="navbar-collapse-1">
                    <ul class="nav navbar-nav pull-right">
                        <li>
                            <a href="https://www.padi.co.jp/scuba-diving/news/" role="button" aria-expanded="false">ニュース</a>
                        </li>
                        <li>
                            <a href="https://www.padi.co.jp/scuba-diving/dive-shop-locator/" role="button" aria-expanded="False">ショップ検索</a>
                        </li>
                        <li class="dropdown yamm-fw"><a href="#" data-toggle="dropdown" class="dropdown-toggle">PADIコース <i class="visible-xs-inline-block fa fa-chevron-down" aria-hidden="true"></i></a>
                            <ul class="dropdown-menu">
                                <!-- ▼ SP only -->
                                <li class="visible-xs-block"><a href="https://www.padi.co.jp/scuba-diving/padi-courses/start-diving/">ダイビングを始めよう</a></li>
                                <li class="visible-xs-block"><a href="https://www.padi.co.jp/scuba-diving/padi-courses/enjoy-diving/">ダイビングを続けよう</a></li>
                                <li class="visible-xs-block"><a href="https://www.padi.co.jp/scuba-diving/padi-courses/become-a-padi-pro/">プロを目指そう</a></li>
                                <li class="visible-xs-block"><a href="https://www.padi.co.jp/scuba-diving/padi-courses/tec-and-free-diving/">テクニカル＆フリーダイビング</a></li>
                                <!-- ▲ SP only -->
                                <!-- ▼ PC only -->
                                <li class="hidden-xs">
                                    <div class="yamm-content course">
                                        <div class="row eq-height">
                                            <div class="col-xs-12 col-sm-6 col-md-3">
                                                <div class="thumbnail step step1">
                                                    <header>
                                                        <a href="https://www.padi.co.jp/scuba-diving/padi-courses/start-diving/"><h4>ダイビングを始めよう<span class="step-arrow"><img src="https://www.padi.co.jp/scuba-diving/assets/img/arrow.svg"></span></h4></a>
                                                    </header>
                                                    <div class="caption">
                                                        <img src="https://www.padi.co.jp/scuba-diving/assets/img/course/1.jpg" alt="ダイビングを始めよう">
                                                        <ul>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/padi-courses/course-catalog/open-water-diver/">オープン・ウォーター・<br>
                                                                ダイバー・コース</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/c-card/whats-c-card/">Cカードとは？</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/why-padi/">PADIが選ばれる理由</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/dive-shop-locator/how-to-choose-your-shop/">ショップ選びのポイント</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/contact-us/ask-padi.aspx">ダイビングの疑問・不安 Q＆A</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p class="btn-wrap"><a href="https://www.padi.co.jp/scuba-diving/padi-courses/start-diving/" class="btn btn-block btn-lg btn-primary">詳しくチェック</a></p>
                                            </div>
                                            <div class="col-xs-12 col-sm-6 col-md-3">
                                                <div class="thumbnail step step2">
                                                    <header>
                                                        <a href="https://www.padi.co.jp/scuba-diving/padi-courses/enjoy-diving/"><h4>ダイビングを続けよう<span class="step-arrow"><img src="https://www.padi.co.jp/scuba-diving/assets/img/arrow.svg"></span></h4></a>
                                                    </header>
                                                    <div class="caption step second">
                                                        <img src="https://www.padi.co.jp/scuba-diving/assets/img/course/2.jpg" alt="ダイビングを続けよう">
                                                        <ul>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/padi-courses/course-catalog/#course-diver-level">ステップアップ・コース</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/padi-courses/course-catalog/specialty-diver-courses/">スペシャルティ・コース</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/padi-courses/course-catalog/master-scuba-diver/">MSDにチャレンジ</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/padi-courses/course-catalog/technical-diving-courses/">TecRec プログラム</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/padi-courses/course-catalog/emergency-first-response-(EFR)-courses/">救急法プログラム</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p class="btn-wrap"><a href="https://www.padi.co.jp/scuba-diving/padi-courses/enjoy-diving/" class="btn btn-block btn-lg btn-primary">詳しくチェック</a></p>
                                            </div>
                                            <div class="col-xs-12 col-sm-6 col-md-3">
                                                <div class="thumbnail step step3">
                                                    <header>
                                                        <a href="https://www.padi.co.jp/scuba-diving/padi-courses/become-a-padi-pro/"><h4>プロを目指そう<span class="step-arrow"><img src="https://www.padi.co.jp/scuba-diving/assets/img/arrow.svg"></span></h4></a>
                                                    </header>
                                                    <div class="caption">
                                                        <img src="https://www.padi.co.jp/scuba-diving/assets/img/course/3.jpg" alt="プロを目指そう">
                                                        <ul>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/padi-courses/course-catalog/#course-pro-level">プロレベル・コース</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/dive-shop-locator/pro-courses/">コース開催スケジュール</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/gopro/">インストラクター試験(IE)</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/membership/">メンバーシップに関するご案内</a></li>
                                                            <li><a href="/visitors/wanted/index.asp">ストア求人情報</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/membership/store/">ストア登録のご案内</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p class="btn-wrap"><a href="https://www.padi.co.jp/scuba-diving/padi-courses/become-a-padi-pro/" class="btn btn-block btn-lg btn-primary">詳しくチェック</a></p>
                                            </div>
                                            <div class="col-xs-12 col-sm-6 col-md-3">
                                                <div class="thumbnail step step4">
                                                    <header>
                                                        <a href="https://www.padi.co.jp/scuba-diving/padi-courses/tec-and-free-diving/"><h4 class="small-font">テクニカル＆フリーダイビング<span class="step-arrow"><img src="https://www.padi.co.jp/scuba-diving/assets/img/arrow.svg"></span></h4></a>
                                                    </header>
                                                    <div class="caption">
                                                        <img src="https://www.padi.co.jp/scuba-diving/assets/img/course/4.jpg" alt="テクニカル＆フリーダイビング">
                                                        <ul>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/padi-courses/course-catalog/technical-diving-courses">テクニカルコース</a></li>
                                                            <li><a href="https://www.padi.co.jp/scuba-diving/padi-courses/course-catalog/free-diving-courses/">フリーダイバーコース</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p class="btn-wrap"><a href="https://www.padi.co.jp/scuba-diving/padi-courses/tec-and-free-diving/" class="btn btn-block btn-lg btn-primary">詳しくチェック</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <!-- ▲ PC only -->
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">eラーニング<i class="visible-xs-inline-block fa fa-chevron-down" aria-hidden="true"></i></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="https://www.padi.co.jp/scuba-diving/digital-products/">概要・申込み</a></li>
                                <li><a href="http://elearning.padi.com/1.cfm" target="_blank">ログイン <i class="fa fa-external-link" aria-hidden="true"></i></a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Cカード <i class="visible-xs-inline-block fa fa-chevron-down" aria-hidden="true"></i></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="https://www.padi.co.jp/scuba-diving/c-card/whats-c-card/">Cカードとは</a></li>
                                <li><a href="https://www.padi.co.jp/scuba-diving/c-card/design/">Cカードの種類</a></li>
                                <li><a href="https://www.padi.co.jp/scuba-diving/c-card/faq/">未着・紛失・再発行</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">スポット情報 <i class="visible-xs-inline-block fa fa-chevron-down" aria-hidden="true"></i></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="https://www.padi.co.jp/scuba-diving/scuba-vacations/vacation-spotlight/">最新スポット情報</a></li>
                                <li><a href="https://www.padi.co.jp/scuba-diving/scuba-vacations/">おすすめエリア情報</a></li>
                                <li><a href="/visitors/travel/index.asp" target="_blank">ツアー情報 <i class="fa fa-external-link" aria-hidden="true"></i></a></li>
                                <li><a href="https://twitter.com/search?q=%23kaikyo+-from%3AMrTell_Me+-from%3Anewsdiving+-from%3Aokinawadive+-from%3Ahumpbacktail+-from%3Adivebot+-from%3Asugumogu+-from%3Amuneds+-from%3Asukyuuuba">Twitter版海況速報 <i class="fa fa-external-link" aria-hidden="true"></i></a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">ABOUT <i class="visible-xs-inline-block fa fa-chevron-down" aria-hidden="true"></i></a>
                            <ul class="dropdown-menu pull-right" role="menu">
                                <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/">PADIについて</a></li>
                                <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/history/">PADIの歴史</a></li>
                                <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/QualityManagement/">お客様のために</a></li>
                                <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/company/">会社案内</a></li>
                                <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/padi-partners/">PADIパートナー</a></li>
                                <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/link/">リンク集</a></li>
                                <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/privacy-policy/">プライバシーポリシー</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    <style type="text/css">
        .slick-slide {
            display: none;
            float: left;
            height: 100%;
            min-height: 1px;
        }
    </style>
<div class="container">
    <div class="Page-Title">
        <h1 class="text-center">ダイビングスポット情報</h1>
    </div>

            <div style="margin-top:20px; border-bottom: 2px solid #00a2d7;">
                <h2 class="color-spot">岩</h2>
                <p class="ml5 color-spot x-small">いわ</p>
            </div>

            <div class="row">
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-sm-4 mt5 mb5 color-666 b">●ダイビングスポット数：</div>
                        <div class="col-sm-8 mt5 mb5 pl30 color-666">
                            ビーチ／<span id="ContentPlaceHolder1_DataList1_bcCntLabel_0">2</span>
                            ボート／<span id="ContentPlaceHolder1_DataList1_btCntLabel_0">4</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 mt5 mb5 color-666 b">●潜水可能時間：</div>
                        <div class="col-sm-8 mt5 mb5 pl30 color-666">
                            <span id="ContentPlaceHolder1_DataList1_openTmLabel_0">8:00-15:30 夏季8:00-15:00(夏季早朝ダイブ可6:00〜)</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 mt5 mb5 color-666 b">●ナイトダイビング：</div>
                        <div class="col-sm-8 mt5 mb5 pl30 color-666">
                            <span id="ContentPlaceHolder1_DataList1_ntDvLabel_0">可（お問い合わせください）</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 mt5 mb5 color-666 b">●エンリッチド・エア：</div>
                        <div class="col-sm-8 mt5 mb5 pl30 color-666">
                            <span id="ContentPlaceHolder1_DataList1_eaDvLabel_0">不可</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 mt5 mb10 color-666 b">●バディ(セルフ)ダイビング：</div>
                        <div class="col-sm-8 mt5 mb10 pl30 color-666">
                            <span id="ContentPlaceHolder1_DataList1_selfDvLabel_0">可</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 p10 text-center hidden-xs">
                        <img src="/visitors/divespot/image/jp_1231.jpg" alt="スポット写真" style="max-width: 150px; height: auto;">
                </div>
            </div>
            <div class="p10 text-center" style="border-top: 2px solid #00a2d7;">
                <span id="ContentPlaceHolder1_DataList1_optionLabel_0"><div class="row"><div class="col-xs-12 col-sm-6" style="margin-top:10px;"><a class="btn btn-default btn-primary" href="resort.aspx?spot_cd=jp_1231">現地のPADIダイブリゾート</a></div><div class="col-xs-12 col-sm-6" style="margin-top:10px;"><a class="btn btn-default btn-primary" href="/travel/ds_tour.asp?spotcd=jp_1231">こだわりツアー</a></div></div></span>
            </div>
            <h4 class="mt20 color-spot b" style="border-bottom: solid 2px #00a2d7;">★エリア概況</h4>
            <div class="mt10 mb20">
                ダイバー様それぞれにニーズに合わせ潜る事が出来る幅広い海が特徴。<br />限定水域、レスキュー講習に最適な『岩海岸』、ファンダイブや講習にも使い勝手の良い『ビーチ』、大きな漁礁『トライアングル』、ドロップオフがダイナミックな『化け根』、イソギンチャク畑には南方系の魚がいっぱいな『小田原』、MAX水深が31ｍと深い『沖漁礁（鉄骨番長）』　初心者〜上級者まで幅広く活用出来ます。<br />また通念を通し季節の生物が出現し、季節来遊魚も多く観察出来ます。
            </div>

            <div id="newest">
                <p style="margin: 0px 5px 0 0; float: right;"><a href="spot_info_all.aspx?spot_cd=jp_1231&amp;pn=1">過去1年間の情報</a></p>
                <span id="ContentPlaceHolder1_DataList1_latestInfoLabel_0"><span style="font-weight:bold;font-size:14px;color:#3366cc;">★現地からの最新情報</span><span style="font-size:10px;font-weight:normal;color:#000000;">　※直近１週間の情報を掲載しています(最新情報：2019年08月10日)</span></span>
            </div>


    <div id="dsdtl">

                <div class="row" style="margin: 0px; border-top: 1px solid #000000; border-collapse: collapse; background-color: #f0ad4e;">
                    <div class="col-sm-3">
                        <span id="ContentPlaceHolder1_DataList2_InfoDtLabel_0"><a href="#SPOT_INFO0" onclick="ChangeSpot('SPOT_INFO0');return false;" onkeypress="ChangeSpot('SPOT_INFO0');return false;">2019-08-10</a></span></div>
                    <div class="col-sm-7">岩ダイビングセンター</div>
                    <div class="col-sm-2"><span id="ContentPlaceHolder1_DataList2_QueryLabel_0"><a href="inquiry/index.aspx?spot_cd=jp_1231&amp;shop_no=7472">問い合わせ</a></span></div>
                </div>
                <span id="ContentPlaceHolder1_DataList2_SpotInfo_0"><div id="SPOT_INFO0" style="border-top:1px solid #000000;background-color:#ffffff;text-align:left;line-height:15pt;clear:both;"></span>
                <div class="row">
                    <div class="col-xs-12 col-sm-9 col-md-10">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">
                                <span id="ContentPlaceHolder1_DataList2_InfoMdLabel_0">★<span style="color:#0000ff;font-weight:bold;">08月10日</span>現在の情報</span></div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ShopNameLabel_0"><a href="/scuba-diving/dive-shop-locator/link-to-store/?shopno=7472" target="_blank">岩ダイビングセンター</a></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■水温：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_WaterLabel_0">（水面）<span style="color:#0000ff;">約26℃</span>　／（水中）<span style="color:#0000ff;">約24℃</span></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■透明度：：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ClearnessLabel_0">約6〜10m</span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■コメント：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ConditionLabel_0">8月10日土曜日　<br> 透視度　4ｍ〜10ｍ<br> 水温　　24度<br> 風向き　南微風</p><p>おはようございま〜す！ 昨日同様遠く離れた10号台風からのウネリが時折よせています、現状ビーチはタイミングを計ってのエントリー、ボートは通常オープン、透視度はビーチで５ｍ〜ボートは８ｍ〜水温23℃〜26℃となっています。しかし足が遅い台風厄介ですね</p><p>ｂｙ哲</p><p> 見れる生物<br>シロブチハタyg、シマウミスズメyg、シコクスズメダイ、ミツボシクロスズメダイ、イソギンチャクエビ、イソギンチャクモエビ、ヒメイソギンチャクエビ、ハナアナゴ、ネコザメの卵、アオリイカ、アオリイカ卵、キヌバリの群れ、ネンブツダイ群れ、チャガラ群れ、ハタンポ群れ、ウミウシ各種etc…</p><p>ダイビング可能時間は最終EN14：00　最終EX15：00となります。よろしくお願い致します。</p><p>ほぼほぼ毎日岩の海況情報＆岩ダイビングセンターの日常を更新中！！<br>下記のＵＲＬへＪＵＭＰ！<br>http://iwadive.divingnavi.info/list.php?offset=0&page_type=54</span></div>
                        </div>
                    </div>
                    <div class="hidden-xs col-sm-3 col-md-2">
                        <span id="ContentPlaceHolder1_DataList2_PhotoLabel_0"><a href="/visitors/divespot/image/doc/7472.jpg" target="_blank"><img src="/visitors/divespot/image/doc/7472.jpg" alt="image"></a><br>今日の一枚</span></div>
                </div>
                </div>

                <div class="row" style="margin: 0px; border-top: 1px solid #000000; border-collapse: collapse; background-color: #f0ad4e;">
                    <div class="col-sm-3">
                        <span id="ContentPlaceHolder1_DataList2_InfoDtLabel_1"><a href="#SPOT_INFO1" onclick="ChangeSpot('SPOT_INFO1');return false;" onkeypress="ChangeSpot('SPOT_INFO1');return false;">2019-08-09</a></span></div>
                    <div class="col-sm-7">岩ダイビングセンター</div>
                    <div class="col-sm-2"><span id="ContentPlaceHolder1_DataList2_QueryLabel_1"><a href="inquiry/index.aspx?spot_cd=jp_1231&amp;shop_no=7472">問い合わせ</a></span></div>
                </div>
                <span id="ContentPlaceHolder1_DataList2_SpotInfo_1"><div id="SPOT_INFO1" style="border-top:1px solid #000000;background-color:#ffffff;text-align:left;line-height:15pt;clear:both;display:none;"></span>
                <div class="row">
                    <div class="col-xs-12 col-sm-9 col-md-10">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">
                                <span id="ContentPlaceHolder1_DataList2_InfoMdLabel_1">★<span style="color:#0000ff;font-weight:bold;">08月09日</span>現在の情報</span></div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ShopNameLabel_1"><a href="/scuba-diving/dive-shop-locator/link-to-store/?shopno=7472" target="_blank">岩ダイビングセンター</a></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■水温：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_WaterLabel_1">（水面）<span style="color:#0000ff;">約24℃</span>　／（水中）<span style="color:#0000ff;">約24℃</span></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■透明度：：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ClearnessLabel_1">約1〜5m</span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■コメント：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ConditionLabel_1">8月9日金曜日　<br> 透視度　4ｍ〜5ｍ<br> 水温　　24度<br> 風向き　南西〜南風</p><p>おはようございます！ 台風10号本当にやっかいですね…どーしてこーもお盆の時期を狙ってやってくるのか…かなり性格悪いですね…<br>そんな本日の岩の海は台風10号からのうねりが若干入り始めました。それ程強くはないので現状タイミングを見てのエントリーであれば問題なさそうです。満潮に近づくにつれてサイズアップも考えられますので早めのダイビングをオススメします。<br>透視度は4ｍ〜5ｍ、岩地と砂地の境目は細かい砂が舞ってますのでちょっと沖に出た方が良さそう、水温は24度です。</p><p>ｂｙ　田野　</p><p> 見れる生物<br>シロブチハタyg、シマウミスズメyg、シコクスズメダイ、ミツボシクロスズメダイ、イソギンチャクエビ、イソギンチャクモエビ、ヒメイソギンチャクエビ、ハナアナゴ、ネコザメの卵、アオリイカ、アオリイカ卵、キヌバリの群れ、ネンブツダイ群れ、チャガラ群れ、ハタンポ群れ、ウミウシ各種etc…</p><p>ダイビング可能時間は最終EN14：00　最終EX15：00となります。よろしくお願い致します。</p><p>ほぼほぼ毎日岩の海況情報＆岩ダイビングセンターの日常を更新中！！<br>下記のＵＲＬへＪＵＭＰ！<br>http://iwadive.divingnavi.info/list.php?offset=0&page_type=54</span></div>
                        </div>
                    </div>
                    <div class="hidden-xs col-sm-3 col-md-2">
                        <span id="ContentPlaceHolder1_DataList2_PhotoLabel_1"></span></div>
                </div>
                </div>

                <div class="row" style="margin: 0px; border-top: 1px solid #000000; border-collapse: collapse; background-color: #f0ad4e;">
                    <div class="col-sm-3">
                        <span id="ContentPlaceHolder1_DataList2_InfoDtLabel_2"><a href="#SPOT_INFO2" onclick="ChangeSpot('SPOT_INFO2');return false;" onkeypress="ChangeSpot('SPOT_INFO2');return false;">2019-08-08</a></span></div>
                    <div class="col-sm-7">岩ダイビングセンター</div>
                    <div class="col-sm-2"><span id="ContentPlaceHolder1_DataList2_QueryLabel_2"><a href="inquiry/index.aspx?spot_cd=jp_1231&amp;shop_no=7472">問い合わせ</a></span></div>
                </div>
                <span id="ContentPlaceHolder1_DataList2_SpotInfo_2"><div id="SPOT_INFO2" style="border-top:1px solid #000000;background-color:#ffffff;text-align:left;line-height:15pt;clear:both;display:none;"></span>
                <div class="row">
                    <div class="col-xs-12 col-sm-9 col-md-10">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">
                                <span id="ContentPlaceHolder1_DataList2_InfoMdLabel_2">★<span style="color:#0000ff;font-weight:bold;">08月08日</span>現在の情報</span></div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ShopNameLabel_2"><a href="/scuba-diving/dive-shop-locator/link-to-store/?shopno=7472" target="_blank">岩ダイビングセンター</a></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■水温：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_WaterLabel_2">（水面）<span style="color:#0000ff;">約26℃</span>　／（水中）<span style="color:#0000ff;">約26℃</span></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■透明度：：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ClearnessLabel_2">約1〜5m</span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■コメント：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ConditionLabel_2">8月8日木曜日　<br> 透視度　3ｍ〜5ｍ<br> 水温　　24度<br> 風向き　南西微風</p><p>おはようございま〜す　本日も容赦ない日差しが気持ち良しの晴天、気温の上昇とともに水温も２６℃、透視度も上がってくれれば良いのですが本日も５ｍ前後となっています、風は無いのですが若干ウネリありの海況、台風１０号よ消えてしまえ　ｂｙ哲<br> 　</p><p> 見れる生物<br>カミソリウオペア、シロブチハタyg、シマウミスズメyg、シコクスズメダイ、ミツボシクロスズメダイ、イソギンチャクエビ、イソギンチャクモエビ、ヒメイソギンチャクエビ、ハナアナゴ、ネコザメの卵、アオリイカ、アオリイカ卵、キヌバリの群れ、ネンブツダイ群れ、チャガラ群れ、ハタンポ群れ、ウミウシ各種etc…</p><p>ダイビング可能時間は最終EN14：00　最終EX15：00となります。よろしくお願い致します。</p><p>ほぼほぼ毎日岩の海況情報＆岩ダイビングセンターの日常を更新中！！<br>下記のＵＲＬへＪＵＭＰ！<br>http://iwadive.divingnavi.info/list.php?offset=0&page_type=54</span></div>
                        </div>
                    </div>
                    <div class="hidden-xs col-sm-3 col-md-2">
                        <span id="ContentPlaceHolder1_DataList2_PhotoLabel_2"></span></div>
                </div>
                </div>

                <div class="row" style="margin: 0px; border-top: 1px solid #000000; border-collapse: collapse; background-color: #f0ad4e;">
                    <div class="col-sm-3">
                        <span id="ContentPlaceHolder1_DataList2_InfoDtLabel_3"><a href="#SPOT_INFO3" onclick="ChangeSpot('SPOT_INFO3');return false;" onkeypress="ChangeSpot('SPOT_INFO3');return false;">2019-08-07</a></span></div>
                    <div class="col-sm-7">岩ダイビングセンター</div>
                    <div class="col-sm-2"><span id="ContentPlaceHolder1_DataList2_QueryLabel_3"><a href="inquiry/index.aspx?spot_cd=jp_1231&amp;shop_no=7472">問い合わせ</a></span></div>
                </div>
                <span id="ContentPlaceHolder1_DataList2_SpotInfo_3"><div id="SPOT_INFO3" style="border-top:1px solid #000000;background-color:#ffffff;text-align:left;line-height:15pt;clear:both;display:none;"></span>
                <div class="row">
                    <div class="col-xs-12 col-sm-9 col-md-10">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">
                                <span id="ContentPlaceHolder1_DataList2_InfoMdLabel_3">★<span style="color:#0000ff;font-weight:bold;">08月07日</span>現在の情報</span></div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ShopNameLabel_3"><a href="/scuba-diving/dive-shop-locator/link-to-store/?shopno=7472" target="_blank">岩ダイビングセンター</a></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■水温：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_WaterLabel_3">（水面）<span style="color:#0000ff;">約24℃</span>　／（水中）<span style="color:#0000ff;">約24℃</span></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■透明度：：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ClearnessLabel_3">約1〜5m</span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■コメント：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ConditionLabel_3">8月7日水曜日　<br> 透視度　3ｍ〜5ｍ<br> 水温　　24度<br> 風向き　南西の風</p><p>おはようございます！台風前のつかの間の穏やかさ、台風8号のうねりもほぼ消えて潜水可能なコンディションとなりました。<br>迷惑台風の10号が発生しましたが、今のところその影響はなし、10日くらいまでは潜れそうかな？！<br>透視度は4ｍ〜5ｍ、水温は24度です。<br>本日スタッフ田野は高圧ガス運送員の講習会、眠いかな〜眠いよな〜座学苦手なんだよな〜早く終わらないかな〜…</p><p>ｂｙ　田野<br> 　</p><p> 見れる生物<br>カミソリウオペア、シロブチハタyg、シマウミスズメyg、シコクスズメダイ、ミツボシクロスズメダイ、イソギンチャクエビ、イソギンチャクモエビ、ヒメイソギンチャクエビ、ハナアナゴ、ネコザメの卵、アオリイカ、アオリイカ卵、キヌバリの群れ、ネンブツダイ群れ、チャガラ群れ、ハタンポ群れ、ウミウシ各種etc…</p><p>ダイビング可能時間は最終EN14：00　最終EX15：00となります。よろしくお願い致します。</p><p>ほぼほぼ毎日岩の海況情報＆岩ダイビングセンターの日常を更新中！！<br>下記のＵＲＬへＪＵＭＰ！<br>http://iwadive.divingnavi.info/list.php?offset=0&page_type=54</span></div>
                        </div>
                    </div>
                    <div class="hidden-xs col-sm-3 col-md-2">
                        <span id="ContentPlaceHolder1_DataList2_PhotoLabel_3"></span></div>
                </div>
                </div>

                <div class="row" style="margin: 0px; border-top: 1px solid #000000; border-collapse: collapse; background-color: #f0ad4e;">
                    <div class="col-sm-3">
                        <span id="ContentPlaceHolder1_DataList2_InfoDtLabel_4"><a href="#SPOT_INFO4" onclick="ChangeSpot('SPOT_INFO4');return false;" onkeypress="ChangeSpot('SPOT_INFO4');return false;">2019-08-06</a></span></div>
                    <div class="col-sm-7">岩ダイビングセンター</div>
                    <div class="col-sm-2"><span id="ContentPlaceHolder1_DataList2_QueryLabel_4"><a href="inquiry/index.aspx?spot_cd=jp_1231&amp;shop_no=7472">問い合わせ</a></span></div>
                </div>
                <span id="ContentPlaceHolder1_DataList2_SpotInfo_4"><div id="SPOT_INFO4" style="border-top:1px solid #000000;background-color:#ffffff;text-align:left;line-height:15pt;clear:both;display:none;"></span>
                <div class="row">
                    <div class="col-xs-12 col-sm-9 col-md-10">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">
                                <span id="ContentPlaceHolder1_DataList2_InfoMdLabel_4">★<span style="color:#0000ff;font-weight:bold;">08月06日</span>現在の情報</span></div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ShopNameLabel_4"><a href="/scuba-diving/dive-shop-locator/link-to-store/?shopno=7472" target="_blank">岩ダイビングセンター</a></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■水温：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_WaterLabel_4">（水面）<span style="color:#0000ff;">約24℃</span>　／（水中）<span style="color:#0000ff;">約24℃</span></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■透明度：：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ClearnessLabel_4">約1〜5m</span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■コメント：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ConditionLabel_4">8月6日火曜日　<br> 透視度　3ｍ〜5ｍ<br> 水温　　24度<br> 風向き　南寄りの風</p><p>おはようございます！昨日のうねりからしたら劇的回復もうちょっとうねりが残るかと思いましたが、どうにかタイミングを見ればエントリー可能な海まで回復してくれました。とはいってもまだうねりがありますのでタイミングを見てのエントリーとなりそうです。<br>講習生、初心者にはちょっと不向きかな？！本日は潜水注意でオープン致します。<br>透視度は3ｍ〜5ｍ、水温は24度です。</p><p>ｂｙ　田野<br> 　</p><p> 見れる生物<br>カミソリウオペア、シロブチハタyg、シマウミスズメyg、シコクスズメダイ、ミツボシクロスズメダイ、イソギンチャクエビ、イソギンチャクモエビ、ヒメイソギンチャクエビ、ハナアナゴ、ネコザメの卵、アオリイカ、アオリイカ卵、キヌバリの群れ、ネンブツダイ群れ、チャガラ群れ、ハタンポ群れ、ウミウシ各種etc…</p><p>ダイビング可能時間は最終EN14：00　最終EX15：00となります。よろしくお願い致します。</p><p>ほぼほぼ毎日岩の海況情報＆岩ダイビングセンターの日常を更新中！！<br>下記のＵＲＬへＪＵＭＰ！<br>http://iwadive.divingnavi.info/list.php?offset=0&page_type=54</span></div>
                        </div>
                    </div>
                    <div class="hidden-xs col-sm-3 col-md-2">
                        <span id="ContentPlaceHolder1_DataList2_PhotoLabel_4"></span></div>
                </div>
                </div>

                <div class="row" style="margin: 0px; border-top: 1px solid #000000; border-collapse: collapse; background-color: #f0ad4e;">
                    <div class="col-sm-3">
                        <span id="ContentPlaceHolder1_DataList2_InfoDtLabel_5"><a href="#SPOT_INFO5" onclick="ChangeSpot('SPOT_INFO5');return false;" onkeypress="ChangeSpot('SPOT_INFO5');return false;">2019-08-05</a></span></div>
                    <div class="col-sm-7">岩ダイビングセンター</div>
                    <div class="col-sm-2"><span id="ContentPlaceHolder1_DataList2_QueryLabel_5"><a href="inquiry/index.aspx?spot_cd=jp_1231&amp;shop_no=7472">問い合わせ</a></span></div>
                </div>
                <span id="ContentPlaceHolder1_DataList2_SpotInfo_5"><div id="SPOT_INFO5" style="border-top:1px solid #000000;background-color:#ffffff;text-align:left;line-height:15pt;clear:both;display:none;"></span>
                <div class="row">
                    <div class="col-xs-12 col-sm-9 col-md-10">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">
                                <span id="ContentPlaceHolder1_DataList2_InfoMdLabel_5">★<span style="color:#0000ff;font-weight:bold;">08月05日</span>現在の情報</span></div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ShopNameLabel_5"><a href="/scuba-diving/dive-shop-locator/link-to-store/?shopno=7472" target="_blank">岩ダイビングセンター</a></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■水温：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_WaterLabel_5">（水面）<span style="color:#0000ff;">約24℃</span>　／（水中）<span style="color:#0000ff;">約24℃</span></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■透明度：：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ClearnessLabel_5">約－m</span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■コメント：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ConditionLabel_5">8月5日月曜日　<br> 透視度　-ｍ<br> 水温　　24度<br> 風向き　北東の風</p><p>おはようございます！あーあだめだこりゃ‥ため息しか出ない海となってしまいました。<br> 思ったより台風8号のうねりが入ってます。殺人的なうねりで完全アウトな海です‥<br>本日はクローズとさせていただきます。</p><p>8号が抜けた後も、9号が沖縄方面へ、そしてまだ台風になってませんが10号（仮）、こいつが悪さしそうな予感‥<br>まだ先の予報なのでわかりませんが、現状の予報で行くと最悪、三連休明けまでオープンできない可能性も‥</p><p>毎日最新情報を発信しますのでご確認の上ご来店よろしくお願いします。</p><p>やっといろんな生物たちが見れてきたのに‥台風のバカヤロー‥<br>さてと、夏で溜まった事務仕事を処理しますか‥</p><p>ｂｙ　田野<br> 　</p><p> 見れる生物<br>カミソリウオペア、シロブチハタyg、シマウミスズメyg、シコクスズメダイ、ミツボシクロスズメダイ、イソギンチャクエビ、イソギンチャクモエビ、ヒメイソギンチャクエビ、ハナアナゴ、ネコザメの卵、アオリイカ、アオリイカ卵、キヌバリの群れ、ネンブツダイ群れ、チャガラ群れ、ハタンポ群れ、ウミウシ各種etc…</p><p>ダイビング可能時間は最終EN14：00　最終EX15：00となります。よろしくお願い致します。</p><p>ほぼほぼ毎日岩の海況情報＆岩ダイビングセンターの日常を更新中！！<br>下記のＵＲＬへＪＵＭＰ！<br>http://iwadive.divingnavi.info/list.php?offset=0&page_type=54</span></div>
                        </div>
                    </div>
                    <div class="hidden-xs col-sm-3 col-md-2">
                        <span id="ContentPlaceHolder1_DataList2_PhotoLabel_5"></span></div>
                </div>
                </div>

                <div class="row" style="margin: 0px; border-top: 1px solid #000000; border-collapse: collapse; background-color: #f0ad4e;">
                    <div class="col-sm-3">
                        <span id="ContentPlaceHolder1_DataList2_InfoDtLabel_6"><a href="#SPOT_INFO6" onclick="ChangeSpot('SPOT_INFO6');return false;" onkeypress="ChangeSpot('SPOT_INFO6');return false;">2019-08-04</a></span></div>
                    <div class="col-sm-7">岩ダイビングセンター</div>
                    <div class="col-sm-2"><span id="ContentPlaceHolder1_DataList2_QueryLabel_6"><a href="inquiry/index.aspx?spot_cd=jp_1231&amp;shop_no=7472">問い合わせ</a></span></div>
                </div>
                <span id="ContentPlaceHolder1_DataList2_SpotInfo_6"><div id="SPOT_INFO6" style="border-top:1px solid #000000;background-color:#ffffff;text-align:left;line-height:15pt;clear:both;display:none;"></span>
                <div class="row">
                    <div class="col-xs-12 col-sm-9 col-md-10">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">
                                <span id="ContentPlaceHolder1_DataList2_InfoMdLabel_6">★<span style="color:#0000ff;font-weight:bold;">08月04日</span>現在の情報</span></div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ShopNameLabel_6"><a href="/scuba-diving/dive-shop-locator/link-to-store/?shopno=7472" target="_blank">岩ダイビングセンター</a></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■水温：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_WaterLabel_6">（水面）<span style="color:#0000ff;">約24℃</span>　／（水中）<span style="color:#0000ff;">約24℃</span></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■透明度：：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ClearnessLabel_6">約6〜10m</span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■コメント：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ConditionLabel_6">8月4日日曜日　<br>透視度　6ｍ<br>水温　　24度<br>風向き　南東の風微風</p><p>おはようございます！昨日の岩花火大会も無事終了し後片づけで大忙しな岩、海は台風8号からのうねりがゆるーく入っています。<br>それ程大きなうねりには見えませんが、パワーがありますのでEN/EXにはお気をつけください。それだけ気をつければ講習生でも潜水可能です。<br>透視度は昨日より若干回復、6ｍ前後、水温は24度となっています。<br>本日も暑くなりそうなので熱中症には注意しましょう！！<br>ｂｙ　田野<br>　</p><p>見れる生物<br>カミソリウオペア、シロブチハタyg、シマウミスズメyg、シコクスズメダイ、ミツボシクロスズメダイ、イソギンチャクエビ、イソギンチャクモエビ、ヒメイソギンチャクエビ、ハナアナゴ、ネコザメの卵、アオリイカ、アオリイカ卵、キヌバリの群れ、ネンブツダイ群れ、チャガラ群れ、ハタンポ群れ、ウミウシ各種etc…</p><p>ダイビング可能時間は最終EN14：00　最終EX15：00となります。よろしくお願い致します。</p><p>ほぼほぼ毎日岩の海況情報＆岩ダイビングセンターの日常を更新中！！<br> 下記のＵＲＬへＪＵＭＰ！<br>http://iwadive.divingnavi.info/list.php?offset=0&page_type=54</p><p></span></div>
                        </div>
                    </div>
                    <div class="hidden-xs col-sm-3 col-md-2">
                        <span id="ContentPlaceHolder1_DataList2_PhotoLabel_6"></span></div>
                </div>
                </div>

                <div class="row" style="margin: 0px; border-top: 1px solid #000000; border-collapse: collapse; background-color: #f0ad4e;">
                    <div class="col-sm-3">
                        <span id="ContentPlaceHolder1_DataList2_InfoDtLabel_7"><a href="#SPOT_INFO7" onclick="ChangeSpot('SPOT_INFO7');return false;" onkeypress="ChangeSpot('SPOT_INFO7');return false;">2019-08-03</a></span></div>
                    <div class="col-sm-7">岩ダイビングセンター</div>
                    <div class="col-sm-2"><span id="ContentPlaceHolder1_DataList2_QueryLabel_7"><a href="inquiry/index.aspx?spot_cd=jp_1231&amp;shop_no=7472">問い合わせ</a></span></div>
                </div>
                <span id="ContentPlaceHolder1_DataList2_SpotInfo_7"><div id="SPOT_INFO7" style="border-top:1px solid #000000;background-color:#ffffff;text-align:left;line-height:15pt;clear:both;display:none;"></span>
                <div class="row">
                    <div class="col-xs-12 col-sm-9 col-md-10">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">
                                <span id="ContentPlaceHolder1_DataList2_InfoMdLabel_7">★<span style="color:#0000ff;font-weight:bold;">08月03日</span>現在の情報</span></div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ShopNameLabel_7"><a href="/scuba-diving/dive-shop-locator/link-to-store/?shopno=7472" target="_blank">岩ダイビングセンター</a></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■水温：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_WaterLabel_7">（水面）<span style="color:#0000ff;">約24℃</span>　／（水中）<span style="color:#0000ff;">約24℃</span></span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■透明度：：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ClearnessLabel_7">約1〜5m</span></div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">■コメント：</div>
                            <div class="col-xs-12 col-sm-8 col-md-10">
                                <span id="ContentPlaceHolder1_DataList2_ConditionLabel_7">8月3日土曜日　岩花火大会　<br>透視度　4ｍ〜5ｍ<br>水温　　24度<br>風向き　南微風</p><p>おはようございます！岩花火大会当日です！海は台風からか？？緩ーくうねりが入っています。底揺れもしていますが、EN/EXに気をつければ講習でも問題なく潜れる海況となっています。<br>透視度は朝のチェックダイブ時で4ｍ〜5ｍ、う〜んなかなか回復してきませんね…白濁が強めでマスククリアを何回もしたくなる透視度です。<br>水温は遂に24度台突入〜</p><p>本日花火大会及び、エビ網漁の関係で最終EXが14：00となります。ご理解ご協力よろしくお願い致します。</p><p>ｂｙ　田野<br>　</p><p>見れる生物<br>カミソリウオペア、ザ･カエルン、シロブチハタyg、シマウミスズメyg、シコクスズメダイ、ミツボシクロスズメダイ、イソギンチャクエビ、イソギンチャクモエビ、ヒメイソギンチャクエビ、ハナアナゴ、ネコザメの卵、アオリイカ、アオリイカ卵、キヌバリの群れ、ネンブツダイ群れ、チャガラ群れ、ハタンポ群れ、ウミウシ各種etc…</p><p>ダイビング可能時間は最終EN14：30　最終EX15：30となります。よろしくお願い致します。</p><p>ほぼほぼ毎日岩の海況情報＆岩ダイビングセンターの日常を更新中！！<br> 下記のＵＲＬへＪＵＭＰ！<br>http://iwadive.divingnavi.info/list.php?offset=0&page_type=54</p><p></span></div>
                        </div>
                    </div>
                    <div class="hidden-xs col-sm-3 col-md-2">
                        <span id="ContentPlaceHolder1_DataList2_PhotoLabel_7"></span></div>
                </div>
                </div>

    </div>


    <div class="mt30 mb30 b">
        <h4 class="mt20 color-spot b" style="border-bottom: solid 2px #00a2d7;">★各スポットの情報　
            <span class="small" style="color:#000;">※スポット名または地図内のフラッグをクリックすると詳しい情報が見られます</span></h4>

        <div id="gmap_spot">
            <div class="slauto">

                        <div>
                            <div class="splst">
                                <div class="flag_icon">
                                    <img src="images/flag_l.png" alt="flag" width="25" height="15"></div>
                                <div class="gmap_title"><a name="gmap_title"><span>トライアングル</span></a></div>
                                <div class="point_icon">

                                    <img id="ContentPlaceHolder1_DataList3_KaiyugyoImg_0" alt="回遊魚との遭遇率が高いスポットです" src="images/kaiyugyo_s.gif" style="height:14px;width:33px;margin: 1px 1px 1px 0px;" />

                                    <img id="ContentPlaceHolder1_DataList3_MacroImg_0" alt="マクロ系が豊富なスポットです" src="images/macro_s.gif" style="height:14px;width:30px;margin: 1px 1px 1px 0px;" />



                                </div>
                                <div class="gmap_level">
                                    初心者〜
                                </div>
                                <div class="gmap_info">
                                    <span id="ContentPlaceHolder1_DataList3_AccessLabel_0"><strong>■アクセス ： </strong>ボート<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_LevelLabel_0"><strong>■レベル ： </strong>初心者〜<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_DepthLabel_0"><strong>■深　度 ： </strong>平均18ｍ／最大23ｍ<br><br></span>
                                    <span id="ContentPlaceHolder1_DataList3_NagareLabel_0"></span>
                                    <span id="ContentPlaceHolder1_DataList3_OtherLabel_0"></span>
                                </div>
                                <div class="gmap_description">
                                    <span id="ContentPlaceHolder1_DataList3_SpotDetailLabel_0"><span style="background-color:#ffff80; font-weight:bold;">■解説 ：</span><br>真鶴道路、岩大橋を建設するときに使用された鉄骨を漁礁として海中に入れたもの。<br />高さ10ｍ弱幅50ｍ。クエやスズキなどの大物や、ネンブツダイ、アジ、イサキ、タカベなどの群れ、ソフトコーラルなども多いのでマクロ派ダイバー〜ワイド派ダイバーまでお楽しみ頂けます。<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_FishDetailLabel_0"></span>
                                </div>
                                <div class="gmap_coord">35.160337,139.145708</div>
                                <div class="gmap_icon">images/flag_m.png</div>
                            </div>
                        </div>

                        <div>
                            <div class="splst">
                                <div class="flag_icon">
                                    <img src="images/flag_l.png" alt="flag" width="25" height="15"></div>
                                <div class="gmap_title"><a name="gmap_title"><span>岩海岸</span></a></div>
                                <div class="point_icon">




                                    <img id="ContentPlaceHolder1_DataList3_NaitoImg_1" alt="ナイトダイビングを楽しめるスポットです" src="images/naito_s.gif" style="height:14px;width:26px;margin: 1px 1px 1px 0px;" />


                                </div>
                                <div class="gmap_level">
                                    初心者〜
                                </div>
                                <div class="gmap_info">
                                    <span id="ContentPlaceHolder1_DataList3_AccessLabel_1"><strong>■アクセス ： </strong>ビーチ<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_LevelLabel_1"><strong>■レベル ： </strong>初心者〜<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_DepthLabel_1"></span>
                                    <span id="ContentPlaceHolder1_DataList3_NagareLabel_1"></span>
                                    <span id="ContentPlaceHolder1_DataList3_OtherLabel_1"></span>
                                </div>
                                <div class="gmap_description">
                                    <span id="ContentPlaceHolder1_DataList3_SpotDetailLabel_1"><span style="background-color:#ffff80; font-weight:bold;">■解説 ：</span><br>岩海岸の浜からのエントリーとなります。どこまで行っても砂地な為ファンダイビングではあまりおススメしていませんが、限定水域の講習やレスキュー講習にはもってこいのポイントです。　エントリー場所は違いますが、ナイトダイビングはこちらのポイントとなります。夜行性の生物がぞろぞろと現れます。<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_FishDetailLabel_1"></span>
                                </div>
                                <div class="gmap_coord">35.1626,139.140279</div>
                                <div class="gmap_icon">images/flag_m.png</div>
                            </div>
                        </div>

                        <div>
                            <div class="splst">
                                <div class="flag_icon">
                                    <img src="images/flag_l.png" alt="flag" width="25" height="15"></div>
                                <div class="gmap_title"><a name="gmap_title"><span>小田原</span></a></div>
                                <div class="point_icon">



                                    <img id="ContentPlaceHolder1_DataList3_MacroImg_2" alt="マクロ系が豊富なスポットです" src="images/macro_s.gif" style="height:14px;width:30px;margin: 1px 1px 1px 0px;" />



                                </div>
                                <div class="gmap_level">
                                    初心者〜
                                </div>
                                <div class="gmap_info">
                                    <span id="ContentPlaceHolder1_DataList3_AccessLabel_2"><strong>■アクセス ： </strong>ボート<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_LevelLabel_2"><strong>■レベル ： </strong>初心者〜<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_DepthLabel_2"><strong>■深　度 ： </strong>平均10ｍ／最大30ｍ<br><br></span>
                                    <span id="ContentPlaceHolder1_DataList3_NagareLabel_2"></span>
                                    <span id="ContentPlaceHolder1_DataList3_OtherLabel_2"></span>
                                </div>
                                <div class="gmap_description">
                                    <span id="ContentPlaceHolder1_DataList3_SpotDetailLabel_2"><span style="background-color:#ffff80; font-weight:bold;">■解説 ：</span><br>根のふもとからエントリー　落差10ｍ程のショートドロップオフ。セブラガニ、ムチカラマツエビ、ムギワラエビなどが見られ、水深5ｍ付近にあるイソギンチャク畑にはクマノミやミツボシクロスズメダイなどの南方系の魚が多く見られます。時折流れる事がある。<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_FishDetailLabel_2"></span>
                                </div>
                                <div class="gmap_coord">35.164196,139.143412</div>
                                <div class="gmap_icon">images/flag_m.png</div>
                            </div>
                        </div>

                        <div>
                            <div class="splst">
                                <div class="flag_icon">
                                    <img src="images/flag_l.png" alt="flag" width="25" height="15"></div>
                                <div class="gmap_title"><a name="gmap_title"><span>化け根</span></a></div>
                                <div class="point_icon">

                                    <img id="ContentPlaceHolder1_DataList3_KaiyugyoImg_3" alt="回遊魚との遭遇率が高いスポットです" src="images/kaiyugyo_s.gif" style="height:14px;width:33px;margin: 1px 1px 1px 0px;" />
                                    <img id="ContentPlaceHolder1_DataList3_ChikeiImg_3" alt="地形が面白いスポットです" src="images/chikei_s.gif" style="height:14px;width:24px;margin: 1px 1px 1px 0px;" />
                                    <img id="ContentPlaceHolder1_DataList3_MacroImg_3" alt="マクロ系が豊富なスポットです" src="images/macro_s.gif" style="height:14px;width:30px;margin: 1px 1px 1px 0px;" />



                                </div>
                                <div class="gmap_level">
                                    中級者〜
                                </div>
                                <div class="gmap_info">
                                    <span id="ContentPlaceHolder1_DataList3_AccessLabel_3"><strong>■アクセス ： </strong>ボート<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_LevelLabel_3"><strong>■レベル ： </strong>中級者〜<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_DepthLabel_3"><strong>■深　度 ： </strong>平均15ｍ／最大28ｍ<br><br></span>
                                    <span id="ContentPlaceHolder1_DataList3_NagareLabel_3"></span>
                                    <span id="ContentPlaceHolder1_DataList3_OtherLabel_3"></span>
                                </div>
                                <div class="gmap_description">
                                    <span id="ContentPlaceHolder1_DataList3_SpotDetailLabel_3"><span style="background-color:#ffff80; font-weight:bold;">■解説 ：</span><br>岩で1番ダイナミックなポイント。根の頭水深5ｍから25ｍまでのドロップオフは圧巻！外海なので時折流れが出る事もありダイナミックなダイビングが可能。回遊魚から根の側面には南方系の魚など生物も豊富です。中性浮力のコントロールが必要です。<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_FishDetailLabel_3"></span>
                                </div>
                                <div class="gmap_coord">35.163898,139.143627</div>
                                <div class="gmap_icon">images/flag_m.png</div>
                            </div>
                        </div>

                        <div>
                            <div class="splst">
                                <div class="flag_icon">
                                    <img src="images/flag_l.png" alt="flag" width="25" height="15"></div>
                                <div class="gmap_title"><a name="gmap_title"><span>沖漁礁（鉄骨番長）</span></a></div>
                                <div class="point_icon">







                                </div>
                                <div class="gmap_level">
                                    上級者
                                </div>
                                <div class="gmap_info">
                                    <span id="ContentPlaceHolder1_DataList3_AccessLabel_4"><strong>■アクセス ： </strong>ボート<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_LevelLabel_4"><strong>■レベル ： </strong>上級者<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_DepthLabel_4"><strong>■深　度 ： </strong>平均25ｍ／最大31ｍ<br><br></span>
                                    <span id="ContentPlaceHolder1_DataList3_NagareLabel_4"></span>
                                    <span id="ContentPlaceHolder1_DataList3_OtherLabel_4"></span>
                                </div>
                                <div class="gmap_description">
                                    <span id="ContentPlaceHolder1_DataList3_SpotDetailLabel_4"><span style="background-color:#ffff80; font-weight:bold;">■解説 ：</span><br>水深31ｍ地点にひっそりとたたずむ鉄骨番長　ヤリイカの産卵床として沈められた鉄骨の家のような形をした漁礁です。冬には大物マンボウなどの出現もあり！　深度が深い為上級者の方におススメ<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_FishDetailLabel_4"></span>
                                </div>
                                <div class="gmap_coord">35.163003,139.147103</div>
                                <div class="gmap_icon">images/flag_m.png</div>
                            </div>
                        </div>

                        <div>
                            <div class="splst">
                                <div class="flag_icon">
                                    <img src="images/flag_l.png" alt="flag" width="25" height="15"></div>
                                <div class="gmap_title"><a name="gmap_title"><span>ビーチ</span></a></div>
                                <div class="point_icon">







                                </div>
                                <div class="gmap_level">
                                    初心者〜
                                </div>
                                <div class="gmap_info">
                                    <span id="ContentPlaceHolder1_DataList3_AccessLabel_5"><strong>■アクセス ： </strong>ビーチ<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_LevelLabel_5"><strong>■レベル ： </strong>初心者〜<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_DepthLabel_5"><strong>■深　度 ： </strong>最大13ｍ<br><br></span>
                                    <span id="ContentPlaceHolder1_DataList3_NagareLabel_5"></span>
                                    <span id="ContentPlaceHolder1_DataList3_OtherLabel_5"></span>
                                </div>
                                <div class="gmap_description">
                                    <span id="ContentPlaceHolder1_DataList3_SpotDetailLabel_5"><span style="background-color:#ffff80; font-weight:bold;">■解説 ：</span><br>MAX水深が13ｍ程と初心者の方でも楽しめるポイント。水中は砂地でフラットな為講習にもおススメです。もちろん季節に応じた生物が出現する為、カメラ派ダイバー、上級者の方もお楽しみ頂けます。<br></span>
                                    <span id="ContentPlaceHolder1_DataList3_FishDetailLabel_5"></span>
                                </div>
                                <div class="gmap_coord">35.160424,139.143777</div>
                                <div class="gmap_icon">images/flag_m.png</div>
                            </div>
                        </div>

                <!--ここまで-->
            </div>
            <!-- slautolg -->
        </div>
        <!-- gmap_spot -->


                <span id="ContentPlaceHolder1_DataList4_SeasonLabel_0"><div class="row"><div class="col-sm-12 col-md-6"><div id="spotmap" class="map"></div></div><div class="hidden-xs col-sm-12 col-md-6"><img src="images/jp_1231fish.gif" alt="シーズナリティ"></div></div></span>

    </div>
</div>

    <!--script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_5i3qMfva7QK3q4rFmzOqPLupytC_WO4"></script-->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLYY49UV2oHKZXahvvELtHHHkIK7TIz5w&callback=initMap"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="/scuba-diving/scuba-vacations/vacation-spotlight/js/gmap_spot.js"></script>
    <script type="text/javascript" src="/scuba-diving/scuba-vacations/vacation-spotlight/js/slick.min.js"></script>
    <script type="text/javascript" src="/scuba-diving/scuba-vacations/vacation-spotlight/js/cycle.js"></script>

    <script>

<!--

    function ChangeSpot(spotname) {
        if (document.all) {
            for (cnt = 0; cnt < 8; cnt++) {
                spot = 'SPOT_INFO' + cnt
                document.all(spot).style.display = 'none'
            }
            document.all(spotname).style.display = 'block';
        }
        else if (document.getElementById) {
            for (cnt = 0; cnt < 8; cnt++) {
                spot = 'SPOT_INFO' + cnt
                document.getElementById(spot).style.display = 'none';
            }
            document.getElementById(spotname).style.display = 'block';
        }
        else if (document.layers) {
            for (cnt = 0; cnt < 8; cnt++) {
                spot = 'SPOT_INFO' + cnt
                document.layers(spot).style.display = 'none';
            }
            document.layers(spotname).style.display = 'block';
        }
    }

    $(function () {
        $('.slauto').slick({
            slidesToShow: 12,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]

        });
    });

    window.onload = function () { map_all('spotmap', 'gmap_spot') }

    // -->
    </script>


        <footer>
            <div class="container listnavi">
                <div class="row">
                    <div class="col-xs-6 col-sm-4 col-md-3">
                        <ul>
                            <li><a href="https://www.padi.co.jp/scuba-diving/news/">NEWS</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/dive-shop-locator/">ショップ検索</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/padi-courses/course-catalog/">PADIコース</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/digital-products/">eラーニング</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/c-card/replacement-c-card/">Cカード再発行</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/scuba-vacations/vacation-spotlight/">最新スポット情報</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/">ABOUT</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-3">
                        <ul>
                            <li><a href="https://www.padi.co.jp/scuba-diving/padi-materials/">教材・商品情報</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/columns/">連載コラム</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/procheck/">インストラクター資格確認</a></li>
                            <li><a href="https://www.padi.co.jp/visitors/wanted/index.asp">求人情報</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/insurance/">ダイバー保険</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/padi-partners/">PADIパートナー</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/why-padi/">Why PADI</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-3">
                        <ul>
                            <li><a href="https://www.padi.co.jp/scuba-diving/membership/">メンバーシップに関するご案内</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/privacy-policy/">プライバシーポリシー</a></li>
                            <li><a href="https://www.padi.co.jp/scuba-diving/about-padi/contact-us/ask-padi.aspx">お問合せ</a></li>
                            <!--li><a href="https://www.padi.co.jp/scuba-diving/sitemap-treeview.aspx">サイトマップ</a></li-->
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 text-right">
                        <a href="https://www.padi.co.jp">
                            <img class="brand-logo pull-right" src="https://www.padi.co.jp/scuba-diving/assets/img/padi-logo.png" alt="PADI"></a>
                    </div>
                </div>
            </div>
            <hr>
            <div class="copyright">
                <p class="text-center"><a href="https://www.padi.co.jp/scuba-diving/about-padi/copyright/"><i class="fa fa-copyright" aria-hidden="true"></i>PADI 2017</a></p>
            </div>
        </footer>
    </div>


    <!--script src="https://www.padi.co.jp/scuba-diving/assets/js/script.js"></script-->
    <script>
        function MM_openBrWindow(theURL, winName, features) { //v2.0
            window.open(theURL, winName, features);
        }
        function m_win(url, windowname, width, height) {
            var features = "location=no, menubar=no, status=yes, scrollbars=yes, resizable=yes, toolbar=no";
            if (width) {
                if (window.screen.width > width)
                    features += ", left=" + (window.screen.width - width) / 2;
                else width = window.screen.width;
                features += ", width=" + width;
            }
            if (height) {
                if (window.screen.height > height)
                    features += ", top=" + (window.screen.height - height) / 2;
                else height = window.screen.height;
                features += ", height=" + height;
            }
            window.open(url, windowname, features);
        }
        $(document).ready(function () {
            $('ul.navbar-nav > li > a.mega').each(function () {
                if ($(this).attr('data-parent') != '') {
                    var attribName = $(this).attr('data-parent');
                    $(this).attr('href', 'javascript:void(0)');
                    $(this).click(function () {
                        $('.panel-group').slideUp();
                        var elem = $('.' + attribName);

                        if (!elem.is(":visible")) {
                            elem.slideDown();
                        }
                        else {
                            elem.slideUp();
                        }
                    });
                }
            });
        });
        $(function () {
            var topBtn = $('#page-top');
            topBtn.hide();
            //スクロールが500に達したらボタン表示
            $(window).scroll(function () {
                if ($(this).scrollTop() > 500) {
                    topBtn.fadeIn();
                } else {
                    topBtn.fadeOut();
                }
            });
            //スクロールしてトップ
            topBtn.click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        });
    </script>
    <p id="page-top"><a href="#">ページトップ</a></p>
</body>
</html>
`;

const regex1 = /<span id="ContentPlaceHolder1_DataList2_InfoMdLabel_0">★<span style="color:#0000ff;font-weight:bold;">([\s\S]*?)<\/span>/;
const result1 = contents.match(regex1);

if (result1) {
    console.log(result1[1]);
} else {
    console.log('なし');
}




// const options = {
//     method: 'GET',
//     uri: 'https://www.padi.co.jp/scuba-diving/scuba-vacations/vacation-spotlight/spot.aspx?sptcd=jp_1231',
// };
// request(options, (error, response, body) => {
//     console.log(error);
//     console.log(body);
//     // const buf    = Buffer.from(body, 'binary');
//     // const retStr = iconv.decode(buf, "Shift_JIS");
//     // console.log(retStr);
// })
