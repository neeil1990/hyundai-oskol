<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "Hyundai Creta купить у официального дилера. Хендай Крета комплектации и цены");
$APPLICATION->SetTitle("Creta");
?>

<content-data>
    <div class="content">

        <script src="https://api-maps.yandex.ru/2.1/?apikey=ffa519d3-303f-463c-afa2-29eec493cd33&lang=ru_RU" type="text/javascript"></script>
        <section class="nav">
            <ul class="nav__menu">
                <li class="nav__item">
                    <a href="#design" class="nav__link scroll">
                        Дизайн
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#dynamics" class="nav__link scroll">
                        Динамика
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#comfort" class="nav__link scroll">
                        Комфорт
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#safety" class="nav__link scroll">
                        Безопасность
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#specs" class="nav__link scroll">
                        Характеристики
                    </a>
                </li>
                <li class="nav__item">
                    <a target="_blank" href="/Creta/gallery" class="nav__link">
                        Галерея
                    </a>
                </li>
                <li class="nav__item">
                    <a target="_blank" href="http://brochures.hyundai.ru/?car=2020-Creta&amp;size=1" class="nav__link" target="_blank">
                        Брошюра
                    </a>
                </li>
            </ul>
            <div class="nav__buttons">
                <a target="_blank" href="/test-drive/Creta" class="df-button nav__button js-open-p-td">
                    Тест-драйв
                </a>
                <a target="_blank" href="/configurator/car/22" class="df-button nav__button">
                    Конфигуратор
                </a>
                <a target="_blank" href="/find-dealer" class="df-button nav__button">
                    Найти дилера
                </a>
            </div>
        </section>

        <section class="banner section section--big lazyload lazypreview" data-bgset="/images/cars/creta/m_pics/01_title/title1.jpg [(max-width: 640px)] | /images/cars/creta/pics/title2.jpg">
            <div class="banner__head">
                <h1 class="banner__title">
                    <span>Hyundai CRETA.</span>
                </h1>
                <div class="banner__subtitle h3">
                    <span>Для дорог и направлений!</span>
                </div>
            </div>
            <div class="blue-label">
                <div class="blue-label__top">
                    <span>от</span> <span id="price-from"></span> &#8381;
                </div>
                <hr>
                <!-- <div class="blue-label__bottom">
                    В кредит — от <span id="credit-from"></span> ₽/мес
                </div> -->
                <div class="blue-label__bottom">
                    Субсидия на покупку<br> 10% от&nbsp;стоимости
                </div>
                <a href="https://www.hyundai.ru/promo/family_car" class="blue-panel__more">
                    Подробнее
                    <svg>
                        <use xlink:href="#arrow-link"></use>
                    </svg>
                </a>
            </div>
            <a href="#view360" class="js-next-slide banner__circle scroll"></a>
            <!-- <div class="preloader__inner"></div> -->

            <div id="hotbuttons">
                <!-- Установим активной модель. model Св-во codeName!!!!!! -->
                <hot-buttons :car-id="22" model="creta" :buttons="[1,1,1,1]" page="isModelPage"></hot-buttons>
            </div>
        </section>

        <section id="view360" class="section">
            <view-360 title="Выбери свою CRETA" car-id="22"></view-360>
        </section>

        <section id="design" class="design">
            <presentation-section
                    title = 'Современный<br>дизайн.'
                    background = '/images/cars/creta/pics/2_design/design_title.jpg'
                    background-mobile = '/images/cars/creta/m_pics/02_design/design_title.jpg'
                    :slides="[
			{
				icon: '/images/cars/creta/svg/d1.svg',
				title: 'Уникальная решетка радиатора.',
				description: 'Эффектная и мощная решетка радиатора придает автомобилю впечатляющий вид.',
				background: '/images/cars/creta/pics/2_design/d1.jpg',
				zoom: 2.6,
				correct: {
					x: 100,
					y: 0
				}
			},
			{
				icon: '/images/cars/creta/svg/d2.svg',
				title: 'Противотуманные фары.',
				description: 'Противотуманные фары не только улучшат видимость в плохую погоду, но и придадут вашему автомобилю эффектный вид.',
				background: '/images/cars/creta/pics/2_design/d2.jpg',
				zoom: 4,
				correct: {
					x: 0,
					y: 0
				}
			},
			{
				icon: '/images/cars/creta/svg/d3.svg',
				title: 'Легкосплавные диски.',
				description: 'Диски подчеркнут устойчивость и спортивный внешний вид Creta.',
				background: '/images/cars/creta/pics/2_design/d3.jpg',
				zoom: 4,
				correct: {
					x: 0,
					y: 0
				}
			},
			{
				icon: '/images/cars/creta/svg/d4.svg',
				title: 'Задние светодиодные фонари.',
				description: 'Использование светодиодов вместо обычных ламп повышает безопасность благодаря повышенной яркости и более быстрому включению.',
				background: '/images/cars/creta/pics/2_design/d4.jpg',
				zoom: 4,
				correct: {
					x: 0,
					y: 0
				}
			}
		]"
            ></presentation-section>
        </section>

        <section class="section s-parallax design design--2">
            <div class="s-parallax__head">
                <h2>
            <span>
                Современный<br>дизайн.
            </span>
                </h2>
            </div>
            <ul class="s-parallax__list s-parallax__list--left">
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="1">
                    <video class="s-parallax__video" autoplay muted loop data-object-fit="cover">
                        <source data-src="/images/cars/creta/video/design_4_1_2.mp4" type="video/mp4">
                    </video>
                    <div class="s-parallax__back lazyload lazypreview" data-bgset="/images/cars/creta/pics/2_design/dd1.jpg">
                    </div>
                    <div class="s-parallax__description">
                        Благодаря <span>фарам проекционного типа</span> с функцией статичной подсветки поворотов движение в темное время суток станет более комфортным.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="2" data-bgset="/images/cars/creta/pics/2_design/dd2.jpg">
                    <div class="s-parallax__description">
                        <span>Накладки на дверных порогах</span> подчеркивают выверенный стиль автомобиля, повышая комфорт пассажиров, а также защищая пороги от износа.
                    </div>
                </li>
            </ul>
            <ul class="s-parallax__list s-parallax__list--right">
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 lazyload lazypreview" data-order="3" data-bgset="/images/cars/creta/pics/2_design/dd3.jpg">
                    <div class="s-parallax__description">
                        <span>Защитная накладка</span> на задний бампер не позволит повредить лакокрасочное покрытие.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 lazyload lazypreview" data-order="4" data-bgset="/images/cars/creta/pics/2_design/dd4.jpg">
                    <div class="s-parallax__description">
                        <span>Надежный стальной каркас</span> из высокопрочной стали - для еще большей безопасности водителя и пассажиров.
                    </div>
                </li>
            </ul>
        </section>

        <section id="dynamics" class="section dynamics dynamics--1 view0">
            <!-- <div class="dynamics__back lazyload lazypreview" data-bgset="/images/cars/creta/tablet/performance_title.jpg [(max-width: 640px)] | /images/cars/creta/tablet/performance_title.jpg"></div> -->
            <div class="dynamics__back dynamics__back--view0 lazyload lazypreview" data-bgset="/images/cars/creta/tablet/performance_slider_1.jpg [(max-width: 640px)] | /images/cars/creta/tablet/performance_slider_1.jpg"></div>
            <div class="dynamics__back dynamics__back--view1 lazyload lazypreview" data-bgset="/images/cars/creta/tablet/performance_slider_2.jpg [(max-width: 640px)] | /images/cars/creta/tablet/performance_slider_2.jpg"></div>
            <div class="dynamics__head">
                <h2 class="dynamics__title">
            <span>
                Великолепная
                <br>динамика.
            </span>
                </h2>
                <div class="dynamics__wrap">
                    <ul class="dynamics__tabs">
                        <li class="dynamics__tab">
                            <a data-view="view0" href="#" class="dynamics__link js-change-view active">
                                1.6 MPi
                            </a>
                        </li>
                        <li class="dynamics__tab">
                            <a data-view="view1" href="#" class="dynamics__link js-change-view">
                                2.0 MPi
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <ul class="dynamics__specs dynamics__specs--0">
                <li class="dynamics__spec">
                    <div class="dynamics__specs-w dynamics__specs-w--0">
                        <div class="dynamics__description">
                            <span id="count1"></span> л.с.
                        </div>
                        <div class="dynamics__text">
                            Максимальная мощность
                        </div>
                    </div>
                </li>
                <li class="dynamics__spec">
                    <div class="dynamics__specs-w dynamics__specs-w--1">
                        <div class="dynamics__description">
                            <span id="count2"></span>.4 сек
                        </div>
                        <div class="dynamics__text">
                            Разгон до 100 км/ч
                        </div>
                    </div>
                </li>
                <li class="dynamics__spec">
                    <div class="dynamics__specs-w dynamics__specs-w--2">
                        <div class="dynamics__description">
                            9.3 л / 100 км
                        </div>
                        <div class="dynamics__text">
                            Средний расход топлива
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="dynamics__specs dynamics__specs--1">
                <li class="dynamics__spec">
                    <div class="dynamics__specs-w dynamics__specs-w--0">
                        <div class="dynamics__description">
                            <span id="count3"></span> л.с.
                        </div>
                        <div class="dynamics__text">
                            Максимальная мощность
                        </div>
                    </div>
                </li>
                <li class="dynamics__spec">
                    <div class="dynamics__specs-w dynamics__specs-w--1">
                        <div class="dynamics__description">
                            <span id="count4"></span>.4 сек
                        </div>
                        <div class="dynamics__text">
                            Разгон до 100 км/ч
                        </div>
                    </div>
                </li>
                <li class="dynamics__spec">
                    <div class="dynamics__specs-w dynamics__specs-w--2">
                        <div class="dynamics__description">
                            9.3 л / 100 км
                        </div>
                        <div class="dynamics__text">
                            Средний расход топлива
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <section class="section dynamics dynamics--2">
            <div class="dynamics__back lazyload lazypreview" data-bgset="/images/cars/creta/tablet/performance_1.jpg [(max-width: 640px)] | /images/cars/creta/tablet/performance_1.jpg"></div>
            <div class="dynamics__head">
                <h2 class="dynamics__title dynamics__title--small">
            <span>
                Великолепная
                <br>динамика.
            </span>
                </h2>
            </div>
            <div class="d-composition">
                <div class="d-composition__icon">
                    <img src="/images/cars/creta/svg/performance_3.svg">
                </div>
                <div class="d-composition__title">
                    6-ступенчатая АКПП и МКПП.
                </div>
                <div class="d-composition__description">
                    Коробка передач обеспечивает великолепный разгон, экономичность и позволяет сократить выбросы CO2. Стандартная хромированная окантовка отлично сочетается с кожаной отделкой руля.
                </div>
            </div>
        </section>

        <section id="comfort" class="comfort">
            <presentation-section
                    title = 'Безупречный<br>комфорт.'
                    background = '/images/cars/creta/pics/4_comfort/comfort_title.jpg'
                    background-mobile = '/images/cars/creta/m_pics/04_comfort/comfort_title.jpg'
                    :slides="[
            {
                icon: '/images/cars/creta/svg/c1.svg',
                title: 'Климат-контроль.',
                description: 'Установите желаемый температурный режим и забудьте о необходимости регулировок, климат-контроль все сделает за вас автоматически.',
                background: '/images/cars/creta/pics/4_comfort/comfort_1.jpg',
                zoom: 2.6,
                correct: {
                    x: 0,
                    y: 0
                }
            },
            {
                icon: '/images/cars/creta/svg/c2.svg',
                title: 'Панель приборов Supervision.',
                description: 'Приборная панель Supervision позволит вам наглядно считывать информацию и оставаться в курсе происходящего с автомобилем.',
                background: '/images/cars/creta/pics/4_comfort/comfort_2.jpg',
                zoom: 2.6,
                correct: {
                    x: 0,
                    y: 0
                }
            },
            {
                icon: '/images/cars/creta/svg/c3.svg',
                title: 'Регулировка сидений.',
                description: 'Большой диапазон регулировок поможет быстро найти оптимальное положение сидений.',
                background: '/images/cars/creta/pics/4_comfort/comfort_3.jpg',
                zoom: 2.6,
                correct: {
                    x: 0,
                    y: -80
                }
            },
            {
                icon: '/images/cars/creta/svg/c4.svg',
                title: 'Комфортные сиденья.',
                description: 'С сидениями повышенной комфортности в Hyundai Creta наслаждение поездкой доступно каждому пассажиру.',
                background: '/images/cars/creta/pics/4_comfort/comfort_4.jpg',
                zoom: 1.7,
                correct: {
                    x: 0,
                    y: -150
                }
            }
        ]"
            ></presentation-section>
        </section>

        <section class="comfort section s-parallax">
            <div class="s-parallax__head">
                <h2>
            <span>
                Безупречный
                <br>комфорт.
            </span>
                </h2>
            </div>
            <ul class="s-parallax__list s-parallax__list--left">
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="1">
                    <video class="s-parallax__video" autoplay muted loop data-object-fit="cover">
                        <source data-src="/images/cars/creta/video/comfort_4_1_1.mp4" type="video/mp4">
                    </video>
                    <div class="s-parallax__back lazyload lazypreview" data-bgset="/images/cars/creta/tablet/с1.jpg [(max-width: 640px)] | /images/cars/creta/tablet/с1.jpg">
                    </div>
                    <div class="s-parallax__description">
                        <span>Настоящий оазис комфорта</span>. Вместительный салон, удобство и комфорт, современные технологии. Детали имеют значение.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="3" data-bgset="/images/cars/creta/tablet/с2.jpg [(max-width: 640px)] | /images/cars/creta/tablet/с2.jpg">
                    <div class="s-parallax__description">
                        <span>Контейнер для хранения в центральном подлокотнике.</span> В центральный подлокотник встроено скрытое отделение для хранения мелких предметов.
                    </div>
                </li>
            </ul>
            <ul class="s-parallax__list s-parallax__list--right">
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 lazyload lazypreview" data-order="2" data-bgset="/images/cars/creta/tablet/с3.jpg [(max-width: 640px)] | /images/cars/creta/tablet/с3.jpg">
                    <div class="s-parallax__description">
                        <span>Футляр для очков.</span> Храните свои очки в специальном футляре, и вам не придется тратить время на их поиски.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 lazyload lazypreview" data-order="4" data-bgset="/images/cars/creta/tablet/с4.jpg [(max-width: 640px)] | /images/cars/creta/tablet/с4.jpg">
                    <div class="s-parallax__description">
                <span>Багажная полка<span> может быть полезна для хранения различных мелочей, а <span>лампочка в багажном отделении</span> поможет найти самое необходимое даже в темное время суток.
                    </div>
                </li>
            </ul>
        </section>

        <section id="safety" class="section safety safety--1">
            <div class="safety__head">
                <h2 class="safety__main">
            <span>
                Технологии
                <br>безопасности
            </span>
                </h2>
            </div>
            <div data-bgset="/images/cars/i30n/m_pics/safety_1.jpg [(max-width: 640px)] | /images/cars/creta/pics/5_tech/st.jpg" class="safety__back safety__back--1 lazyload lazypreview"></div>
        </section>

        <section class="section s-parallax safety safety--2">
            <div class="safety__head">
                <h2 class="safety__main safety__main--small safety__main--on">
            <span>
                Технологии
                <br>безопасности.
            </span>
                </h2>
            </div>
            <ul class="s-parallax__list s-parallax__list--left">
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="1" data-bgset="/images/cars/creta/pics/5_tech/s1.jpg [(max-width: 640px)] | /images/cars/creta/pics/5_tech/s1.jpg">
                    <div class="s-parallax__description">
                        Для обеспечения максимальной безопасности Hyundai Creta оборудован <span>6 подушками безопасности</span> – 2 фронтальными и 2 боковыми для водителя и переднего пассажира, а также шторками безопасности с каждой стороны.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--100 lazyload lazypreview" data-order="2" data-bgset="/images/cars/creta/pics/5_tech/s2.jpg [(max-width: 640px)] | /images/cars/creta/pics/5_tech/s2.jpg">
                    <div class="s-parallax__description s-parallax__description--black">
                        <span>Электронная система стабилизации курсовой устойчивости ESС.</span> Если система обнаружит, что автомобиль начинает скользить и водитель рискует потерять управление, то она автоматически вмешается, применяя торможение на отдельных колесах для предотвращения потери курсовой устойчивости.
                    </div>
                </li>
            </ul>
            <ul class="s-parallax__list s-parallax__list--right">
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--100 lazyload lazypreview" data-order="4" data-bgset="/images/cars/creta/pics/5_tech/s3.jpg [(max-width: 640px)] | /images/cars/creta/pics/5_tech/s3.jpg">
                    <div class="s-parallax__description s-parallax__description--black">
                        <span>Система помощи при старте в гору (HAC)</span> определяет, когда автомобиль находится на подъеме, и автоматически задействует тормоза для предотвращения опасного откатывания назад.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 lazyload lazypreview" data-order="3" data-bgset="/images/cars/creta/pics/5_tech/s4.jpg [(max-width: 640px)] | /images/cars/creta/pics/5_tech/s4.jpg">
                    <div class="s-parallax__description">
                        <span>Система помощи при парковке.</span> Изображение с камеры заднего вида транслируется на дисплей мультимедиа системы. Датчики в заднем бампере реагируют на объекты, которых вы не видите, и предупреждают о них звуковым сигналом.
                    </div>
                </li>
            </ul>
        </section>

        <section id="specs">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <specs-section car-id="22" model-type="Кроссовер" number-of-seats="5" engine="Бензиновый" drive="Передний / Полный" gear-box="Механическая / Автоматическая" car-name="Creta"></specs-section>
                        <div class="specs" style="padding-top: 0px;">
                            <div class="section__center">
                                <div class="dsclmr df-text-small-12px">
                                    <div class="dsclmr__icon"><svg width="2" height="9" viewBox="0 0 2 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.75H0V9H2V6.75Z" fill="white"></path> <path d="M0.133301 0H1.86663L1.5333 5.55H0.466634L0.133301 0Z" fill="white"></path></svg></div>
                                    <div class="dsclmr__body">Платеж рассчитан по программе Hyundai Старт исходя из цены Hyundai Creta (1.6 6MT 2WD Start) 957 000руб. 2019 года производства на условиях кредитного продукта «Hyundai Finance Special»: срок кредита 36 мес., процентная ставка 14.8% годовых, первоначальный взнос 446 700 руб., сумма кредита 510 300 руб.. Остаточный платеж (часть стоимости автомобиля, подлежащая оплате в конце срока кредита) ― 50% от цены ТС на момент покупки. Обязательно оформление полиса КАСКО на весь срок кредита в страховых компаниях, соответствующих требованиям Банка. Тарифным планом предусмотрена финансовая защита кредита. Кредит предоставляется ПАО «Совкомбанк» Генеральная лицензия Банка России № 963 от 05 декабря 2014 года. Предложение действует с 01.02.2020 по 29.02.2020г., не является офертой. Условия могут быть изменены Банком в одностороннем порядке. Подробные условия кредитования на сайте www.sovcombank.ru.</div>
                                </div>
                            </div>
                        </div>

                        <div class="section__center">
                            <div class="df-help model-seo-text">
                                <button class="df-help__icon model-seo-text__icon model-seo-text__icon--grey js-show-df-hint-popup">
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.82353 6.68588C1.79412 6.59942 1.76471 6.50336 1.73529 6.39769C1.71569 6.28242 1.70588 6.17195 1.70588 6.06628C1.70588 5.71086 1.78431 5.40346 1.94118 5.14409C2.09804 4.87512 2.35294 4.61575 2.70588 4.36599L3.36765 3.89049C3.59314 3.72719 3.77451 3.55908 3.91176 3.38617C4.05882 3.20365 4.13235 3.00192 4.13235 2.78098C4.13235 2.47358 4.01471 2.21902 3.77941 2.01729C3.55392 1.80596 3.2549 1.70029 2.88235 1.70029C2.5098 1.70029 2.20098 1.80115 1.95588 2.00288C1.72059 2.20461 1.56373 2.48319 1.48529 2.83862L0 2.17579C0.0882353 1.88761 0.210784 1.61383 0.367647 1.35447C0.52451 1.0951 0.72549 0.864553 0.970588 0.662824C1.21569 0.461095 1.5049 0.302593 1.83824 0.187319C2.18137 0.0624398 2.56863 0 3 0C3.44118 0 3.84314 0.0720462 4.20588 0.216138C4.57843 0.350624 4.89706 0.537944 5.16176 0.778097C5.42647 1.00864 5.63235 1.28722 5.77941 1.61383C5.92647 1.94044 6 2.29107 6 2.66571C6 2.9635 5.96078 3.23247 5.88235 3.47262C5.81373 3.70317 5.71569 3.91451 5.58824 4.10663C5.47059 4.28914 5.33333 4.45245 5.17647 4.59654C5.02941 4.74063 4.87745 4.87032 4.72059 4.98559L4.05882 5.46109C3.83333 5.6244 3.67157 5.7829 3.57353 5.9366C3.48529 6.0903 3.44118 6.29203 3.44118 6.54179V6.68588H1.82353ZM1.52941 7.79539H3.79412V10H1.52941V7.79539Z" fill="white"></path>
                                    </svg>
                                </button>
                                <div class="df-hint-popup">
                                    <a href="#" class="df-hint-popup__close js-close-df-hint-popup">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="6.10352e-05" y="7.27264" width="10.2851" height="1.02851" transform="rotate(-45 6.10352e-05 7.27264)" fill="#002C5F"></rect>
                                            <rect x="0.727234" width="10.2851" height="1.02851" transform="rotate(45 0.727234 0)" fill="#002C5F"></rect>
                                        </svg>
                                    </a>
                                    <div class="df-hint-popup__text">
                                        Выберите ближайший к&nbsp;Вам дилерский центр, оцените динамические характеристики автомобиля на&nbsp;тест-драйве и&nbsp;примите правильное решение: купить Hyundai Creta. Для вас всегда есть удобные программы кредитования и&nbsp;другие выгодные предложения.
                                    </div>
                                </div>
                            </div>				</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</content-data>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
