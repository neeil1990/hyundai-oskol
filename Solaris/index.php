<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Solaris");
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
                    <a target="_blank" href="/Solaris/gallery" class="nav__link">
                        Галерея
                    </a>
                </li>
                <li class="nav__item">
                    <a target="_blank" href="http://brochures.hyundai.ru/?car=2020-Solaris&amp;size=1" class="nav__link" target="_blank">
                        Брошюра
                    </a>
                </li>
            </ul>
            <div class="nav__buttons">
                <a target="_blank" href="/test-drive/Solaris" class="df-button nav__button js-open-p-td">
                    Тест-драйв
                </a>
                <a target="_blank" href="/configurator/car/23" class="df-button nav__button">
                    Конфигуратор
                </a>
                <a target="_blank" href="/find-dealer" class="df-button nav__button">
                    Найти дилера
                </a>
            </div>
        </section>

        <section class="banner section section--big lazyload lazypreview" data-bgset="/images/cars/Solaris/m_pics/01_title/title.jpg [(max-width: 640px)] | /images/cars/Solaris/pics/title.jpg">
            <div class="banner__head">
                <h1 class="banner__title">
                    <span>Новый SOLARIS.</span>
                </h1>
                <div class="banner__subtitle h3">
                    <span>Свой для каждого.</span>
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
                <a href="https://www.hyundai.ru/promo/new_owners" class="blue-panel__more">
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
                <hot-buttons :car-id="23" model="solaris" :buttons="[1,1,1,1]" page="isModelPage"></hot-buttons>
            </div>
        </section>

        <section id="view360" class="section">
            <view-360 title="Выбери свой SOLARIS" car-id="23"></view-360>
        </section>

        <section id="design" class="design">
            <presentation-section
                    title = 'High-tech<br>дизайн.'
                    background = '/images/cars/Solaris/pics/2_design/design_title.jpg'
                    background-mobile = '/images/cars/Solaris/m_pics/02_design/design_title.jpg'
                    :slides="[
			{
				icon: '/images/cars/Solaris/svg/design_2.svg',
				title: 'Противотуманные фары.',
				description: 'Противотуманные фары обеспечивают великолепную видимость даже в тяжелые погодные условия.',
				background: '/images/cars/Solaris/pics/2_design/design_2.jpg',
				zoom: 2.6,
				correct: {
					x: 100,
					y: 0
				}
			},
			{
				icon: '/images/cars/Solaris/svg/design_1.svg',
				title: 'Новая решетка.',
				description: 'Новая решетка радиатора прибавляет автомобилю элегантности и подчеркивает принадлежность к семейству автомобилей Hyundai.',
				background: '/images/cars/Solaris/pics/2_design/design_1.jpg',
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
                Дерзкий
                <br>дизайн.
            </span>
                </h2>
            </div>
            <ul class="s-parallax__list s-parallax__list--left">
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="1">
                    <video class="s-parallax__video" autoplay muted loop data-object-fit="cover">
                        <source data-src="/images/cars/Solaris/video/design_4_1_1.mp4" type="video/mp4">
                    </video>
                    <div class="s-parallax__back lazyload lazypreview" data-bgset="/images/cars/Solaris/m_pics/02_design/d1.jpg [(max-width: 640px)] | /images/cars/Solaris/pics/2_design/d1.jpg">
                    </div>
                    <div class="s-parallax__description">
                        <span>Светодиодные дневные ходовые огни</span> помогают новому Solaris соответствовать стилю современного мегаполиса.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="2" data-bgset="/images/cars/Solaris/m_pics/02_design/d2.jpg [(max-width: 640px)] | /images/cars/Solaris/pics/2_design/d2.jpg">
                    <div class="s-parallax__description">
                        <span>Зеркала с повторителями указателей поворота</span> обеспечивают великолепный обзор в Hyundai Solaris и дополнительную безопасность при маневре.
                    </div>
                </li>
            </ul>
            <ul class="s-parallax__list s-parallax__list--right">
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--100 lazyload lazypreview" data-order="3">
                    <video class="s-parallax__video" autoplay muted loop data-object-fit="cover">
                        <source data-src="/images/cars/Solaris/video/design_4_3_1.mp4" type="video/mp4">
                    </video>
                    <div class="s-parallax__back lazyload lazypreview" data-bgset="/images/cars/Solaris/pics/2_design/d3.jpg [(max-width: 640px)] | /images/cars/Solaris/pics/2_design/d3.jpg">
                    </div>
                    <div class="s-parallax__description">
                        Стильные <span>задние LED-фонари</span> теперь будут притягивать ещё больше восхищенных взглядов.
                    </div>
                </li>
            </ul>
        </section>

        <section id="dynamics" class="section dynamics dynamics--1 view0">
            <!-- <div class="dynamics__back lazyload lazypreview" data-bgset="/images/cars/Solaris/m_pics/03_performance/performance_title.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/performance_title.jpg"></div> -->
            <div class="dynamics__back dynamics__back--view0 lazyload lazypreview" data-bgset="/images/cars/Solaris/m_pics/03_performance/performance_slider_1.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/performance_slider_1.jpg"></div>
            <div class="dynamics__back dynamics__back--view1 lazyload lazypreview" data-bgset="/images/cars/Solaris/m_pics/03_performance/performance_slider_2.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/performance_slider_2.jpg"></div>
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
                                1.4 MPI
                            </a>
                        </li>
                        <li class="dynamics__tab">
                            <a data-view="view1" href="#" class="dynamics__link js-change-view">
                                1.6 MPI
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
            <div class="dynamics__back lazyload lazypreview" data-bgset="/images/cars/Solaris/m_pics/03_performance/performance_1.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/performance_1.jpg"></div>
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
                    <img src="/images/cars/Solaris/svg/performance_3.svg">
                </div>
                <div class="d-composition__title">
                    6-ступенчатая АКПП и МКПП.
                </div>
                <div class="d-composition__description">
                    6-ступенчатая коробка АКПП наделяет Hyundai Solaris плавностью переключения и комфортом в движении. 6-ступенчатая МКПП обеспечит экономичную и динамичную езду.
                </div>
            </div>
        </section>

        <section id="comfort" class="comfort">
            <presentation-section
                    title = 'Безупречный<br>комфорт.'
                    background = '/images/cars/Solaris/pics/4_comfort/comfort_title.jpg'
                    background-mobile = '/images/cars/Solaris/m_pics/04_comfort/comfort_title.jpg'
                    :slides="[
            {
                icon: '/images/cars/Solaris/svg/c1.svg',
                title: 'Электроусилитель руля',
                description: 'Электроусилитель рулевого управления создает дополнительное усилие во время поворота рулевого колеса и бережёт ваши силы в пути.',
                background: '/images/cars/Solaris/pics/4_comfort/comfort_1.jpg',
                zoom: 2.6,
                correct: {
                    x: 0,
                    y: 0
                }
            },
            {
                icon: '/images/cars/Solaris/svg/c2.svg',
                title: 'Регулировка руля в четырёх направлениях',
                description: 'Новый Solaris имеет чуткий руль с обогревом, который регулируется в четырёх направлениях.',
                background: '/images/cars/Solaris/pics/4_comfort/comfort_2.jpg',
                zoom: 2.6,
                correct: {
                    x: 0,
                    y: 0
                }
            },
            {
                icon: '/images/cars/Solaris/svg/c3.svg',
                title: 'Регулировка водительского сиденья',
                description: 'Задайте нужные положения водительского сидения и совершайте длительные путешествия с максимальным комфортом.',
                background: '/images/cars/Solaris/pics/4_comfort/comfort_3.jpg',
                zoom: 2.6,
                correct: {
                    x: 0,
                    y: -30
                }
            },
            {
                icon: '/images/cars/Solaris/svg/c4.svg',
                title: 'Кнопка «Старт»',
                description: 'Оцените удобство кнопки запуска двигателя! А ключ зажигания достаточно носить в кармане!',
                background: '/images/cars/Solaris/pics/4_comfort/comfort_4.jpg',
                zoom: 2.6,
                correct: {
                    x: 0,
                    y: 0
                }
            },
            {
                icon: '/images/cars/Solaris/svg/c5.svg',
                title: 'Выдвижной подлокотник',
                description: 'Новый Solaris умеет продемонстрировать «чувство локтя» в дальних поездках.',
                background: '/images/cars/Solaris/pics/4_comfort/comfort_5.jpg',
                zoom: 2.6,
                correct: {
                    x: 0,
                    y: -70
                }
            },
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
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="1" data-bgset="/images/cars/Solaris/tablet/comfort_1.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/comfort_1.jpg">
                    <div class="s-parallax__description">
                        <span>Подогрев форсунок.</span> Благодаря подогреву форсунок стеклоомывателя водитель в любую погоду сможет поддерживать чистоту лобового стекла.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="3" data-bgset="/images/cars/Solaris/tablet/comfort_2.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/comfort_2.jpg">
                    <div class="s-parallax__description">
                        <span>Увеличенный объем бензобака.</span> В новом Solaris мы увеличили ёмкость бензобака, что позволит совершать путешествия на дальние расстояния.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--100 lazyload lazypreview" data-order="5" data-bgset="/images/cars/Solaris/tablet/comfort_3.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/comfort_3.jpg">
                    <div class="s-parallax__description">
                        <span>Увеличенный объем бачка омывающей жидкости.</span> Больше объём бачка омывателя в новом Solaris – меньше грязи на стёклах.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="7" data-bgset="/images/cars/Solaris/tablet/comfort_4.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/comfort_4.jpg">
                    <div class="s-parallax__description">
                        <span>Бокс для очков.</span> Храните свой аксессуар в удобном и легкодоступном месте.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="9" data-bgset="/images/cars/Solaris/tablet/comfort_5.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/comfort_5.jpg">
                    <div class="s-parallax__description">
                        <span>USB и AUX порты</span> помогут упростить взаимодействие с мультимедийной системой автомобиля.
                    </div>
                </li>
            </ul>
            <ul class="s-parallax__list s-parallax__list--right">
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--100 lazyload lazypreview" data-order="2" data-bgset="/images/cars/Solaris/tablet/comfort_6.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/comfort_6.jpg">
                    <div class="s-parallax__description">
                        <span>Подогрев передних и задних сидений.</span> Быстрый подогрев передних и задних сидений не даст водителю
                        и пассажирам замерзнуть и сделает поездки более комфортными.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 lazyload lazypreview" data-order="4">
                    <video class="s-parallax__video" autoplay muted loop data-object-fit="cover">
                        <source data-src="/images/cars/Solaris/video/comfort_4_4_2.mp4" type="video/mp4">
                    </video>
                    <div class="s-parallax__back lazyload lazypreview"  data-bgset="/images/cars/Solaris/tablet/comfort_7.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/comfort_7.jpg">
                    </div>
                    <div class="s-parallax__description">
                        <span>Автоматическое открывание багажника.</span> Багажник в новом Solaris открывается автоматически из салона, что позволяет водителю избежать контакта с наружными деталями кузова автомобиля.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 lazyload lazypreview" data-order="6" data-bgset="/images/cars/Solaris/tablet/comfort_8.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/comfort_8.jpg">
                    <div class="s-parallax__description">
                        <span>Полноразмерное запасное колесо.</span> Незаменимая деталь, дающая водителю чувство уверенности.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--100 lazyload lazypreview" data-order="8">
                    <video class="s-parallax__video" autoplay muted loop data-object-fit="cover">
                        <source data-src="/images/cars/Solaris/video/comfort_4_8_1.mp4" type="video/mp4">
                    </video>
                    <div class="s-parallax__back lazyload lazypreview" data-bgset="/images/cars/Solaris/tablet/comfort_9.jpg [(max-width: 640px)] | /images/cars/Solaris/tablet/comfort_9.jpg">
                    </div>
                    <div class="s-parallax__description">
                        <span>Современная мультимедиа система с 7″ экраном</span> поддерживает мобильные интерфейсы Apple CarPlay* и Android Auto**, что предоставляет совершенно новый уровень взаимодействия с автомобилем.
                    </div>
                </li>
            </ul>
        </section>

        <section id="safety" class="section safety safety--1">
            <div class="safety__head">
                <h2 class="safety__main">
            <span>
                Всесторонняя
                <br>защита.
            </span>
                </h2>
            </div>
            <div data-bgset="/images/cars/i30n/m_pics/safety_1.jpg [(max-width: 640px)] | /images/cars/Solaris/pics/5_tech/st.jpg" class="safety__back safety__back--1 lazyload lazypreview"></div>
        </section>

        <section class="section s-parallax safety safety--2">
            <div class="safety__head">
                <h2 class="safety__main safety__main--small safety__main--on">
            <span>
                Всесторонняя
                <br>защита.
            </span>
                </h2>
            </div>
            <ul class="s-parallax__list s-parallax__list--left">
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="1" data-bgset="/images/cars/Solaris/pics/5_tech/s1.jpg [(max-width: 640px)] | /images/cars/Solaris/pics/5_tech/s1.jpg">
                    <div class="s-parallax__description">
                        <span>Фронтальные и боковые передние подушки безопасности</span>, а также шторки безопасности для передних и задних пассажиров делают Solaris одним из самых защищенных автомобилей в своем классе.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--50 lazyload lazypreview" data-order="2" data-bgset="/images/cars/Solaris/pics/5_tech/s2.jpg [(max-width: 640px)] | /images/cars/Solaris/pics/5_tech/s2.jpg">
                    <div class="s-parallax__description">
                        Изображение <span>с камеры заднего вида</span> транслируется на большой дисплей центральной консоли, а динамическая разметка на мониторе поможет с легкостью рассчитать траекторию движения автомобиля.
                    </div>
                </li>
            </ul>
            <ul class="s-parallax__list s-parallax__list--right">
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 lazyload lazypreview" data-order="4" data-bgset="/images/cars/Solaris/pics/5_tech/s3.jpg [(max-width: 640px)] | /images/cars/Solaris/pics/5_tech/s3.jpg">
                    <div class="s-parallax__description">
                        <span>Государственная система экстренного реагирования при авариях «ЭРА-ГЛОНАСС»</span> – это использование технологий ГЛОНАСС в целях повышения безопасности на транспорте.
                    </div>
                </li>
                <li class="s-parallax__item s-parallax__item--right s-parallax__item--50 lazyload lazypreview" data-order="3" data-bgset="/images/cars/Solaris/pics/5_tech/s4.jpg [(max-width: 640px)] | /images/cars/Solaris/pics/5_tech/s4.jpg">
                    <div class="s-parallax__description">
                        <span>Система контроля давления в шинах</span> предназначена для предупреждения об опасном изменении давления в шинах.
                    </div>
                </li>
            </ul>
        </section>

        <section id="specs">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <specs-section car-id="23" model-type="Седан" number-of-seats="5" engine="Бензиновый" drive="Передний" gear-box="Механическая / Автоматическая"  car-name="Solaris"></specs-section>
                        <div class="specs" style="padding-top: 0px;">
                            <div class="section__center">
                                <div class="dsclmr df-text-small-12px">
                                    <div class="dsclmr__icon"><svg width="2" height="9" viewBox="0 0 2 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.75H0V9H2V6.75Z" fill="white"></path> <path d="M0.133301 0H1.86663L1.5333 5.55H0.466634L0.133301 0Z" fill="white"></path></svg></div>
                                    <div class="dsclmr__body">Платеж рассчитан по программе Hyundai Старт исходя из цены Hyundai Solaris (1.4 6MT Active) 746 000 руб. 2019 года производства на условиях кредитного продукта «Hyundai Finance Special»: срок кредита 36 мес., процентная ставка 14.8% годовых, первоначальный взнос 332 500 руб., сумма кредита 413 500 руб.. Остаточный платеж (часть стоимости автомобиля, подлежащая оплате в конце срока кредита) ― 50% от цены ТС на момент покупки. Обязательно оформление полиса КАСКО на весь срок кредита в страховых компаниях, соответствующих требованиям Банка. Кредит предоставляется ПАО «Совкомбанк» Генеральная лицензия Банка России № 963 от 05 декабря 2014 года. Предложение действует с 01.02.2020 по 29.02.2020г., не является офертой. Условия могут быть изменены Банком в одностороннем порядке. Подробные условия кредитования на сайте www.sovcombank.ru.</div>
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
                                        Выберите ближайший к&nbsp;Вам дилерский центр, оцените динамические характеристики автомобиля на&nbsp;тест-драйве и&nbsp;примите правильное решение: купить Hyundai Solaris. Для вас всегда есть удобные программы кредитования и&nbsp;другие выгодные предложения.
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
