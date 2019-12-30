<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Shell Helix Ultra.");
?>

    <content-data>
        <div class="content">
            <script>
                window.addEventListener('load', function () {
                    document.querySelector('.main-img').classList.add('active');
                })
            </script>

            <div class="section-top">
                <div class="top-bg">
                    <div class="container">
                        <a href="/offers" class="df-back-link">
                            Все предложения
                            <svg>
                                <use xlink:href="#back-link"></use>
                            </svg>
                        </a>
                        <div class="main-img">
                            <div class="main-img-inner lazyload lazypreview" data-bgset="/storage/special_offers/bannerm_1575541822.jpg [(max-width: 640px)] | /storage/special_offers/banner_1575541822.jpg"></div>
                            ;
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-product" id="offerPage">
                <div class="container">
                    <div class="product-desc">
                        <div class="df-text-main-16px product-desc-text"><p>Мы знаем, что владельцы Hyundai заинтересованы в надежной и эффективной работе двигателей своих автомобилей, поэтому приглашаем до 31 декабря 2019 г посетить официальные дилерские центры Hyundai, где вы сможете:</p>
                            <p>- Заменить моторное масло на оригинальное кобрендинговое масло Shell Helix Ultra AH 0W-30 и Shell Helix Ultra ECT AH 0W-30 по специальной цене<br />- Воспользоваться специальными ценами на запасные части<sup>1</sup><br />- Пройти бесплатную диагностику по программе &laquo;Лучшее для своих&raquo;<sup>2</sup></p>
                            <p>Подробности Вы можете уточнить у сотрудников официальных дилерских центров.</p>
                            <p>&nbsp;</p></div>
                        <div class="signup-btn">
                            <img src="/images/promo2/paper.svg" alt=""/>
                            <a href="/find-dealer" class="signup-btn-text">Найти дилера</a>
                        </div>
                    </div>

                    <div class="product-desc product-desc-footer">
                        <div class="star">
                            *
                        </div>
                        <div class="df-text-small-12px product-desc-footer-text"><p><sup>1</sup> В стоимость включены работы по замене масла, масляный фильтр <span lang="EN-US">Product line</span>&nbsp;2, оригинальная прокладка сливной пробки, необходимое количество моторного масла Shell Helix Ultra ECT AH 0W-30, согласно рекомендациям в сервисной книжке автомобиля.</p>
                            <p><sup>2</sup> Сервисная программа &laquo;Лучшее для своих&raquo; включает в себя комплексную бесплатную диагностику автомобилей Hyundai старше 2 лет с момента их выпуска по 36 ключевым пунктам без ограничений по сроку эксплуатации и пробегу автомобилей (в рамках кампании услуга предоставляется для автомобилей любого возраста).</p></div>
                    </div>
                </div>
            </div>
        </div>
    </content-data>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>