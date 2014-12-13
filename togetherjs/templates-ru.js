/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

define([], function () {
  return {
    "interface": "<% /*\n   This is basically all the markup and interface for TogetherJS.\n   Note all links should be like http://localhost:8080/togetherjs/*\n   these links are rewritten with the location where TogetherJS was deployed.\n\n   This file is inlined into togetherjs/templates.js\n*/ %>\n<div id=\"togetherjs-container\" class=\"togetherjs\">\n\n  <!-- This is the main set of buttons: -->\n  <div id=\"togetherjs-dock\" class=\"togetherjs-dock-right\">\n    <div id=\"togetherjs-dock-anchor\" title=\"Передвинуть панель\">\n      <span id=\"togetherjs-dock-anchor-horizontal\">\n        <img src=\"http://localhost:8080/togetherjs/images/icn-handle-circle@2x.png\" alt=\"drag\">\n      </span>\n      <span id=\"togetherjs-dock-anchor-vertical\">\n        <img src=\"http://localhost:8080/togetherjs/images/icn-handle-circle@2x.png\" alt=\"drag\">\n      </span>\n    </div>\n    <div id=\"togetherjs-buttons\">\n      <div style=\"display: none\">\n        <button id=\"togetherjs-template-dock-person\" class=\"togetherjs-button togetherjs-dock-person\">\n          <div class=\"togetherjs-tooltip togetherjs-dock-person-tooltip\">\n            <span class=\"togetherjs-person-name\"></span>\n            <span class=\"togetherjs-person-tooltip-arrow-r\"></span>\n          </div>\n          <div class=\"togetherjs-person togetherjs-person-status-overlay\"></div>\n        </button>\n      </div>\n      <button id=\"togetherjs-profile-button\" class=\"togetherjs-button\" title=\"Это Вы\">\n        <div class=\"togetherjs-person togetherjs-person-self\"></div>\n        <div id=\"togetherjs-profile-arrow\"></div>\n      </button>\n      <button id=\"togetherjs-share-button\" class=\"togetherjs-button\" title=\"Добавить друга\"></button>\n      <button id=\"togetherjs-audio-button\" class=\"togetherjs-button\" title=\"Включить микрофон\">\n        <span id=\"togetherjs-audio-unavailable\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\">\n        </span>\n        <span id=\"togetherjs-audio-ready\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\" style=\"display: none\">\n        </span>\n        <span id=\"togetherjs-audio-outgoing\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\" style=\"display: none\">\n        </span>\n        <span id=\"togetherjs-audio-incoming\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\" style=\"display: none\">\n        </span>\n        <span id=\"togetherjs-audio-active\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\" style=\"display: none\">\n        </span>\n        <span id=\"togetherjs-audio-muted\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\" style=\"display: none\">\n        </span>\n        <span id=\"togetherjs-audio-error\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\" style=\"display: none\">\n        </span>\n      </button>\n      <button id=\"togetherjs-chat-button\" class=\"togetherjs-button\" title=\"Чат\"></button>\n      <div id=\"togetherjs-dock-participants\"></div>\n    </div>\n  </div>\n\n  <!-- The window for editing the avatar: -->\n  <div id=\"togetherjs-avatar-edit\" class=\"togetherjs-modal\"\n       style=\"display: none\">\n    <header> Update  yo avatar </header>\n    <section>\n      <div class=\"togetherjs-avatar-preview togetherjs-person togetherjs-person-self\"></div>\n      <div id=\"togetherjs-avatar-buttons\">\n        <input type=\"file\" class=\"togetherjs-upload-avatar\">\n        <!--<button id=\"togetherjs-upload-avatar\" class=\"togetherjs-primary\">Upload a picture</button>-->\n        <!--<button id=\"togetherjs-camera-avatar\" class=\"togetherjs-default\">Take a picture</button>-->\n      </div>\n    </section>\n    <section class=\"togetherjs-buttons\">\n      <button class=\"togetherjs-cancel togetherjs-dismiss\">Отмена</button>\n      <span class=\"togetherjs-alt-text\">или</span>\n      <button class=\"togetherjs-avatar-save togetherjs-primary\">Сохранить</button>\n    </section>\n  </div>\n\n  <!-- The window for sharing the link: -->\n  <div id=\"togetherjs-share\" class=\"togetherjs-window\"\n       data-bind-to=\"#togetherjs-share-button\" style=\"display: none\">\n    <header> Invite Your Team </header>\n    <section>\n      <div class=\"togetherjs-not-mobile\">\n        <p>Copy and paste this link over in Chat</p>\n        <input type=\"text\" class=\"togetherjs-share-link\">\n      </div>\n      <div class=\"togetherjs-only-mobile\">\n        <p>Скопируйте эту ссылку и приклейте её в IM или в имейл:</p>\n        <input type=\"text\" class=\"togetherjs-share-link\">\n        <!-- <a class=\"togetherjs-share-link\" href=\"#\">Press your thumb here.</a> -->\n      </div>\n    </section>\n  </div>\n\n  <!-- Participant Full List view template: -->\n  <div id=\"togetherjs-participantlist\" class=\"togetherjs-window\"\n       data-bind-to=\"#togetherjs-participantlist-button\" style=\"display: none\">\n    <header> Summoners </header>\n    <section>\n      <div class=\"togetherjs-not-mobile\">\n        <ul>\n          <li id=\"togetherjs-participant-item\">\n            <img class=\"togetherjs-person togetherjs-person-small\" src=\"http://localhost:8080/togetherjs/images/btn-menu-change-avatar.png\">\n            <span class=\"tj-name togetherjs-person-name\">NAME</span>\n            <span class=\"tj-status\">&#9679;</span>\n            <p class=\"tj-urllocation\">Сейчас на: <a class=\"togetherjs-person-url togetherjs-person-url-title\" href=\"\">http://www.location.comwww.location.comwww.location.comasdfsafd</a></p>\n            <p class=\"tj-follow\">Последовать:\n              <label class=\"togetherjs-follow-question\" for=\"togetherjs-person-status-follow\">\n                <input type=\"checkbox\" id=\"togetherjs-person-status-follow\">\n              </label>\n            </p>\n            <section class=\"togetherjs-buttons\">\n              <!-- Displayed when the peer is at a different URL: -->\n              <div class=\"togetherjs-different-url\">\n                <a class=\"togetherjs-nudge togetherjs-default tj-btn-sm\">Толкнуть друга</a>\n                <a href=\"#\" class=\"togetherjs-follow togetherjs-person-url togetherjs-primary tj-btn-sm\">Присоединиться к нему</a>\n              </div>\n              <!-- Displayed when the peer is at your same URL: -->\n              <div class=\"togetherjs-same-url\" style=\"display: none\">\n                <span class=\"togetherjs-person-name\"></span> с Вами на одной странице.\n              </div>\n            </section>\n          </li>\n        </ul>\n    </section>\n  </div>\n\n  <!-- Participant detail template: -->\n  <div id=\"togetherjs-template-participant-window\" class=\"togetherjs-window\" style=\"display: none\">\n    <header><div class=\"togetherjs-person togetherjs-person-small\"></div><span class=\"togetherjs-person-name\"></span></header>\n\n    <section class=\"togetherjs-participant-window-main\">\n      <p class=\"togetherjs-participant-window-row\"><strong>Роль:</strong>\n        <span class=\"togetherjs-person-role\"></span>\n      </p>\n\n      <p class=\"togetherjs-participant-window-row\"><strong>Сейчас на:</strong>\n        <a class=\"togetherjs-person-url togetherjs-person-url-title\"></a>\n      </p>\n\n      <p class=\"togetherjs-participant-window-row\"><strong>Статус:</strong>\n        <span class=\"togetherjs-person-status\"></span>\n      </p>\n\n      <p class=\"togetherjs-participant-window-row\"><strong class=\"togetherjs-float-left\">Следовать за этим участником:</strong>\n        <label class=\"togetherjs-follow-question togetherjs-float-left\" for=\"togetherjs-person-status-follow\">\n          <input type=\"checkbox\" id=\"togetherjs-person-status-follow\">\n        </label>\n        <span class=\"togetherjs-clear\"></span>\n      </p>\n\n    </section>\n\n    <section class=\"togetherjs-buttons\">\n      <!-- Displayed when the peer is at a different URL: -->\n      <div class=\"togetherjs-different-url\">\n        <a class=\"togetherjs-nudge togetherjs-default\">Толкнуть друга</a>\n        <a href=\"#\" class=\"togetherjs-follow togetherjs-person-url togetherjs-primary\">Присоединиться к нему</a>\n      </div>\n      <!-- Displayed when the peer is at your same URL: -->\n      <div class=\"togetherjs-same-url\" style=\"display: none\">\n        <span class=\"togetherjs-person-name\"></span> с Вами на одной странице.\n      </div>\n    </section>\n  </div>\n\n  <!-- The chat screen: -->\n  <div id=\"togetherjs-chat\" class=\"togetherjs-window\" data-bind-to=\"#togetherjs-chat-button\"\n       style=\"display: none\">\n    <header> Чат </header>\n    <section class=\"togetherjs-subtitle\">\n      <div id=\"togetherjs-chat-participants\" data-toggles=\"#togetherjs-chat-no-participants\" style=\"display: none\">\n        <span id=\"togetherjs-chat-participant-list\"></span>\n        &amp; Вы\n      </div>\n      <div id=\"togetherjs-chat-no-participants\" data-toggles=\"#togetherjs-chat-participants\">\n        Здесь больше никого нет.\n      </div>\n    </section>\n\n    <div style=\"display: none\">\n\n      <!-- Template for one message: -->\n      <div id=\"togetherjs-template-chat-message\" class=\"togetherjs-chat-item togetherjs-chat-message\">\n        <div class=\"togetherjs-person\"></div>\n        <div class=\"togetherjs-timestamp\"><span class=\"togetherjs-time\">HH:MM</span> <span class=\"togetherjs-ampm\">AM/PM</span></div>\n        <div class=\"togetherjs-person-name-abbrev\"></div>\n        <div class=\"togetherjs-chat-content togetherjs-sub-content\"></div>\n      </div>\n\n      <!-- Template for when a person leaves: -->\n      <div id=\"togetherjs-template-chat-left\" class=\"togetherjs-chat-item togetherjs-chat-left-item\">\n        <div class=\"togetherjs-person\"></div>\n        <div class=\"togetherjs-ifnot-declinedJoin\">\n          <div class=\"togetherjs-inline-text\"><span class=\"togetherjs-person-name\"></span> покинул сеанс.</div>\n        </div>\n        <div class=\"togetherjs-if-declinedJoin\">\n          <div class=\"togetherjs-inline-text\"><span class=\"togetherjs-person-name\"></span> отказался присоединиться к сеансу.</div>\n        </div>\n        <div class=\"togetherjs-clear\"></div>\n      </div>\n\n      <!-- Template when a person joins the session: -->\n      <div id=\"togetherjs-template-chat-joined\" class=\"togetherjs-chat-item togetherjs-chat-join-item\">\n        <div class=\"togetherjs-person\"></div>\n        <div class=\"togetherjs-inline-text\"><span class=\"togetherjs-person-name\"></span> присоединился к сеансу.</div>\n        <div class=\"togetherjs-clear\"></div>\n      </div>\n\n      <!-- Template for system-derived messages: -->\n      <div id=\"togetherjs-template-chat-system\" class=\"togetherjs-chat-item\">\n        <span class=\"togetherjs-chat-content togetherjs-sub-content\"></span>\n      </div>\n\n      <!-- Template when a person joins the session: -->\n      <!-- <div id=\"togetherjs-template-chat-joined\" class=\"togetherjs-chat-item togetherjs-chat-join-item\">\n        <div class=\"togetherjs-person\"></div>\n        <div class=\"togetherjs-inline-text\"><span class=\"togetherjs-person-name\"></span> joined the session.</div>\n        <div class=\"togetherjs-clear\"></div>\n      </div> -->\n\n      <!-- Template for when someone goes to a new URL: -->\n      <div id=\"togetherjs-template-url-change\" class=\"togetherjs-chat-item togetherjs-chat-url-change\">\n        <div class=\"togetherjs-person\"></div>\n        <div class=\"togetherjs-inline-text\">\n          <div class=\"togetherjs-if-sameUrl\">\n            <span class=\"togetherjs-person-name\"></span>\n            с Вами на одной странице.\n          </div>\n          <div class=\"togetherjs-ifnot-sameUrl\">\n            <span class=\"togetherjs-person-name\"></span>\n            отправился на: <a href=\"#\" class=\"togetherjs-person-url togetherjs-person-url-title\" target=\"_self\"></a>\n            <section class=\"togetherjs-buttons togetherjs-buttons-notification-diff-url\">\n              <!-- Displayed when the peer is at a different URL: -->\n              <div class=\"togetherjs-different-url togetherjs-notification-diff-url\">\n                <a class=\"togetherjs-nudge togetherjs-default\">Толкнуть друга</a>\n                <a href=\"#\" class=\"togetherjs-follow togetherjs-person-url togetherjs-primary\">Присоединиться к нему</a>\n              </div>\n            </section>\n\n            <!-- <div>\n              <a class=\"togetherjs-nudge togetherjs-secondary\">Nudge them</a>\n              <a href=\"\" class=\"togetherjs-person-url togetherjs-follow togetherjs-primary\">Join them</a>\n            </div> -->\n\n          </div>\n        </div>\n        <div class=\"togetherjs-clear\"></div>\n      </div>\n    </div>\n\n    <section id=\"togetherjs-chat-messages\">\n      <!-- FIX ME// need to have some dialogue that says something like - There are no chats yet! -->\n    </section>\n    <section id=\"togetherjs-chat-input-box\">\n      <textarea id=\"togetherjs-chat-input\" placeholder=\"Напечатайте своё сообщение здесь\"></textarea>\n    </section>\n  </div>\n\n  <!-- this is a kind of warning popped up when you (successfully) start RTC: -->\n  <div id=\"togetherjs-rtc-info\" class=\"togetherjs-window\"\n       data-bind-to=\"#togetherjs-audio-button\"\n       style=\"display: none\">\n\n    <header> Аудио-чат </header>\n    <section>\n      <p>\n        Включите <strong>микрофон браузера</strong> возле адресной строки вверху.\n      </p>\n      <p>\n        Разговор по микрофону через веб-браузер - экспериментальное свойство.\n      </p>\n      <p>\n        Почитайте больше об аудио-чате <a href=\"https://github.com/mozilla/togetherjs/wiki/About-Audio-Chat-and-WebRTC\" target=\"_blank\">здесь</a>.\n      </p>\n    </section>\n\n    <section class=\"togetherjs-buttons\">\n      <label for=\"togetherjs-rtc-info-dismiss\" style=\"display: inline;\">\n        <input class=\"togetherjs-dont-show-again\" id=\"togetherjs-rtc-info-dismiss\" type=\"checkbox\">\n        Больше не показывать.\n      </label>\n      <button class=\"togetherjs-default togetherjs-dismiss\" type=\"button\">Закрыть</button>\n    </section>\n  </div>\n\n  <!-- this is popped up when you hit the audio button, but RTC isn't\n  supported: -->\n  <div id=\"togetherjs-rtc-not-supported\" class=\"togetherjs-window\"\n       data-bind-to=\"#togetherjs-audio-button\"\n       style=\"display: none\">\n    <header> Аудио-чат </header>\n\n    <section>\n      <p>Аудио-чат требует, чтобы Вы использовали<a href='https://github.com/mozilla/togetherjs/wiki/About-Audio-Chat-and-WebRTC' target='_blank'>браузер поновее</a>!</p>\n      <p>\n        Для живого аудио-чата требуется более новый (или другой) браузер, чем тот, который Вы используете.\n      </p>\n      <p>\n        Посмотрите на <a href='https://github.com/mozilla/togetherjs/wiki/About-Audio-Chat-and-WebRTC' target='_blank'>'этой странице'</a> дополнительную информацию и список поддерживаемых браузеров.\n      </p>\n    </section>\n\n    <section class=\"togetherjs-buttons\">\n      <div class=\"togetherjs-rtc-dialog-btn\">\n        <button class=\"togetherjs-default togetherjs-dismiss\" type=\"button\">Закрыть</button>\n      </div>\n    </section>\n  </div>\n\n  <!-- The popup when a chat message comes in and the #togetherjs-chat window isn't open -->\n  <div id=\"togetherjs-chat-notifier\" class=\"togetherjs-notification\"\n       data-bind-to=\"#togetherjs-chat-button\"\n       style=\"display: none\">\n    <img src=\"http://localhost:8080/togetherjs/images/notification-togetherjs-logo.png\" class=\"togetherjs-notification-logo\" alt=\"\">\n    <img src=\"http://localhost:8080/togetherjs/images/notification-btn-close.png\" class=\"togetherjs-notification-closebtn togetherjs-dismiss\" alt=\"[close]\">\n    <section id=\"togetherjs-chat-notifier-message\">\n    </section>\n  </div>\n\n  <!-- The menu when you click on the profile: -->\n  <div id=\"togetherjs-menu\" class=\"togetherjs-menu\" style=\"display: none\">\n    <div class=\"togetherjs-menu-item togetherjs-menu-disabled\" id=\"togetherjs-menu-profile\">\n      <img id=\"togetherjs-menu-avatar\">\n      <span class=\"togetherjs-person-name-self\" id=\"togetherjs-self-name-display\" data-toggles=\"#togetherjs-menu .togetherjs-self-name\">[nickname]</span>\n      <input class=\"togetherjs-self-name\" type=\"text\" data-toggles=\"#togetherjs-self-name-display\" style=\"display: none\" placeholder=\"Введите своё имя\">\n    </div>\n    <div class=\"togetherjs-menu-hr-avatar\"></div>\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-update-name\"><img src=\"http://localhost:8080/togetherjs/images/button-pencil.png\" alt=\"\"> Обновить своё имя</div>\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-update-avatar\"><img src=\"http://localhost:8080/togetherjs/images/btn-menu-change-avatar.png\" alt=\"\"> Изменить аватар</div>\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-update-color\"><span class=\"togetherjs-person-bgcolor-self\"></span> Выбрать цвет профиля</div>\n    <div class=\"togetherjs-hr\"></div>\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-help\">Помощь</div>\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-feedback\">Отзывы и предложения</div>\n    <div id=\"togetherjs-invite\" style=\"display: none\">\n      <div class=\"togetherjs-hr\"></div>\n      <div id=\"togetherjs-invite-users\"></div>\n      <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-refresh-invite\">Refresh users</div>\n      <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-invite-anyone\">Пригласить кого-нибудь</div>\n    </div>\n    <div class=\"togetherjs-hr\"></div>\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-end\"><img src=\"http://localhost:8080/togetherjs/images/button-end-session.png\" alt=\"\"> Закончить <span class=\"togetherjs-tool-name\">TogetherJS</span></div>\n  </div>\n\n  <!-- template for one person in the invite-users list -->\n  <div style=\"display: none\">\n    <div id=\"togetherjs-template-invite-user-item\" class=\"togetherjs-menu-item\">\n      <!-- FIXME: should include avatar in some way -->\n      <span class=\"togetherjs-person-name\"></span>\n    </div>\n  </div>\n\n  <!-- A window version of #togetherjs-menu, for use on mobile -->\n  <div id=\"togetherjs-menu-window\" class=\"togetherjs-window\" style=\"display: none\">\n    <header>Установки и профиль</header>\n    <section>\n    <div class=\"togetherjs-menu-item\">\n      <img class=\"togetherjs-menu-avatar\">\n      <span class=\"togetherjs-person-name-self\" id=\"togetherjs-self-name-display\"></span>\n    </div>\n    <div class=\"togetherjs-menu-hr-avatar\"></div>\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-update-name-button\"><img src=\"http://localhost:8080/togetherjs/images/button-pencil.png\" alt=\"\"> Обновить своё имя</div>\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-update-avatar-button\"><img src=\"http://localhost:8080/togetherjs/images/btn-menu-change-avatar.png\" alt=\"\"> Изменить аватар</div>\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-update-color-button\"><span class=\"togetherjs-person-bgcolor-self\"></span> Выбрать цвет профиля</div>\n    <div class=\"togetherjs-hr\"></div>\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-help-button\">Помощь</div>\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-feedback-button\">Отзывы и предложения</div>\n    <div class=\"togetherjs-hr\"></div>\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-end-button\"><img src=\"http://localhost:8080/togetherjs/images/button-end-session.png\" alt=\"\"> Закончить TOOL_NAME</div>\n    </section>\n    <section class=\"togetherjs-buttons\">\n      <button class=\"togetherjs-dismiss togetherjs-primary\">Хорошо</button>\n    </section>\n  </div>\n\n  <!-- The name editor, for use on mobile -->\n  <div id=\"togetherjs-edit-name-window\" class=\"togetherjs-window\" style=\"display: none\">\n    <header>Обновить имя</header>\n    <section>\n      <div>\n        <input class=\"togetherjs-self-name\" type=\"text\" placeholder=\"Введите своё имя\">\n      </div>\n    </section>\n    <section class=\"togetherjs-buttons\">\n      <button class=\"togetherjs-dismiss togetherjs-primary\">Хорошо</button>\n    </section>\n  </div>\n\n  <div class=\"togetherjs-menu\" id=\"togetherjs-pick-color\" style=\"display: none\">\n    <div class=\"togetherjs-triangle-up\"><img src=\"http://localhost:8080/togetherjs/images/icn-triangle-up.png\"></div>\n    <div style=\"display: none\">\n      <div id=\"togetherjs-template-swatch\" class=\"togetherjs-swatch\">\n      </div>\n    </div>\n  </div>\n\n  <!-- Invisible elements that handle the RTC audio: -->\n  <audio id=\"togetherjs-audio-element\"></audio>\n  <audio id=\"togetherjs-local-audio\" muted=\"true\" volume=\"0.3\"></audio>\n  <audio id=\"togetherjs-notification\" src=\"http://localhost:8080/togetherjs/images/notification.ogg\"></audio>\n\n  <!-- The intro screen for someone who joins a session the first time: -->\n  <div id=\"togetherjs-intro\" class=\"togetherjs-modal\" style=\"display: none\">\n    <header>Присоединиться к сеансу TOOL_NAME?</header>\n    <section>\n      <p>Ваш друг просит Вас присоединиться к его TOOL_SITE_LINK браузер-сеансу, чтобы сотрудничать с Вами в реальном времени!</p>\n      <p>Хотели бы Вы присоединиться к его сеансу?</p>\n    </section>\n\n    <section class=\"togetherjs-buttons\">\n      <button class=\"togetherjs-destructive togetherjs-modal-dont-join\">Нет, не присоединяться</button>\n      <button class=\"togetherjs-primary togetherjs-dismiss\">Да, присоединиться к сеансу</button>\n    </section>\n  </div>\n\n  <!-- Shown when a web browser is completely incapable of running TogetherJS: -->\n  <div id=\"togetherjs-browser-broken\" class=\"togetherjs-modal\" style=\"display: none\">\n    <header> Извините </header>\n\n    <section>\n      <p>\n        Извините, TOOL_NAME не работает на этом браузере. Просьба <a href='https://github.com/mozilla/togetherjs/wiki/Supported-Browsers#supported-browsers'>обновиться до поддерживаемого браузера</a>, чтобы попробовать TOOL_NAME.\n      </p>\n\n      <p id=\"togetherjs-browser-broken-is-ie\" style=\"display: none\">\n        Нам нужна Ваша помощь в починке TogetherJS на Internet Explorer!  Вот список <a href=\"https://github.com/mozilla/togetherjs/issues?labels=IE&milestone=&page=1&state=open\" target=\"_blank\">ошибок на GitHub</a>, которые нам нужно починить, и над которыми Вы можете поработать.\n        Internet Explorer <a href=\"https://github.com/mozilla/togetherjs/wiki/Supported-Browsers#internet-explorer\"> в настоящее время не поддерживается</a>.  Если Вы действительно хотите испытать TogetherJS, советуем Вам использовать Firefox или Chrome.\n      </p>\n    </section>\n\n    <section class=\"togetherjs-buttons\">\n      <button class=\"togetherjs-dismiss togetherjs-primary\">Закончить TOOL_NAME</button>\n    </section>\n\n  </div>\n\n  <!-- Shown when the browser has WebSockets, but is IE (i.e., IE10) -->\n  <div id=\"togetherjs-browser-unsupported\" class=\"togetherjs-modal\" style=\"display: none\">\n    <header> Браузер не поддерживается </header>\n\n    <section>\n      <p>\n        Нам нужна Ваша помощь в починке TogetherJS на Internet Explorer!  Вот список <a href=\"https://github.com/mozilla/togetherjs/issues?labels=IE&milestone=&page=1&state=open\" target=\"_blank\">ошибок на GitHub</a>, которые нам нужно починить, и над которыми Вы можете поработать.\n        Internet Explorer <a href=\"https://github.com/mozilla/togetherjs/wiki/Supported-Browsers#internet-explorer\"> в настоящее время не поддерживается</a>.  Если Вы действительно хотите испытать TogetherJS, советуем Вам использовать Firefox или Chrome.\n      </p>\n\n      <p>Вы можете продолжать пробовать использовать TOOL_NAME, но скорее всего Вы получите массу ошибок. Мы Вас предупредили.</p>\n\n    </section>\n\n    <section class=\"togetherjs-buttons\">\n      <button class=\"togetherjs-dismiss togetherjs-primary\">Закончить TOOL_NAME</button>\n      <button class=\"togetherjs-dismiss togetherjs-secondary togetherjs-browser-unsupported-anyway\">Всё равно попробовать TOOL_NAME</button>\n    </section>\n\n  </div>\n\n  <div id=\"togetherjs-confirm-end\" class=\"togetherjs-modal\" style=\"display: none\">\n    <header> Закончить сеанс? </header>\n    <section>\n      <p>\n        Вы уверены, что хотите завершить свой сеанс TOOL_NAME?\n      </p>\n    </section>\n    <section class=\"togetherjs-buttons\">\n      <button class=\"togetherjs-cancel togetherjs-dismiss\">Отмена</button>\n      <span class=\"togetherjs-alt-text\">или</span>\n      <button id=\"togetherjs-end-session\" class=\"togetherjs-destructive\">Закончить сеанс</button>\n    </section>\n  </div>\n\n  <div id=\"togetherjs-feedback-form\" class=\"togetherjs-modal\" style=\"display: none;\">\n    <header> Отзывы и предложения </header>\n    <iframe src=\"https://docs.google.com/a/mozilla.com/forms/d/1lVE7JyRo_tjakN0mLG1Cd9X9vseBX9wci153z9JcNEs/viewform?embedded=true\" width=\"400\" height=\"300\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Загружаю форму ...</iframe>\n    <!-- <p><button class=\"togetherjs-modal-close\">Close</button></p> -->\n  </div>\n\n  <div style=\"display: none\">\n    <!-- This is when you join a session and the other person has already changed to another URL: -->\n    <div id=\"togetherjs-template-url-change\" class=\"togetherjs-modal\">\n      <header> Следую на новый URL... </header>\n      <section>\n        <div class=\"togetherjs-person\"></div>\n        Следую\n        <span class=\"togetherjs-person-name\"></span>\n        на <a href=\"\" class=\"togetherjs-person-url togetherjs-person-url-title\"></a>\n      </section>\n    </div>\n\n    <!-- This is when someone invites you to their session: -->\n    <div id=\"togetherjs-template-invite\" class=\"togetherjs-chat-item\">\n      <div class=\"togetherjs-person\"></div>\n      <div>\n        <span class=\"togetherjs-person-name\"></span>\n        пригласил <strong class=\"togetherjs-if-forEveryone\">кого-либо</strong>\n        <strong class=\"togetherjs-ifnot-forEveryone\">Вас</strong>\n        на <a href=\"\" data-togetherjs-subattr-href=\"href\" class=\"togetherjs-sub-hrefTitle\" target=\"_blank\"></a>\n      </div>\n    </div>\n  </div>\n  <!-- The pointer at the side of a window: -->\n  <div id=\"togetherjs-window-pointer-right\" style=\"display: none\"></div>\n  <div id=\"togetherjs-window-pointer-left\" style=\"display: none\"></div>\n  <!-- The element that overlaps the background of the page during a modal dialog: -->\n  <div id=\"togetherjs-modal-background\" style=\"display: none\"></div>\n  <!-- Some miscellaneous templates -->\n  <div style=\"display: none\">\n    <!-- This is the cursor: -->\n    <div id=\"togetherjs-template-cursor\" class=\"togetherjs-cursor togetherjs\">\n      <!-- Note: images/cursor.svg is a copy of this (for editing): -->\n      <!-- crossbrowser svg dropshadow http://demosthenes.info/blog/600/Creating-a-True-CrossBrowser-Drop-Shadow- -->\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"15px\" height=\"22.838px\" viewBox=\"96.344 146.692 15 22.838\" enable-background=\"new 96.344 146.692 15 22.838\"\n\t xml:space=\"preserve\">\n<path fill=\"#231F20\" d=\"M98.984,146.692c2.167,1.322,1.624,6.067,3.773,7.298c-0.072-0.488,2.512-0.931,3.097,0\n\tc0.503,0.337,1.104-0.846,2.653,0.443c0.555,0.593,3.258,2.179,1.001,8.851c-0.446,1.316,2.854,0.135,1.169,2.619\n\tc-3.748,5.521-9.455,2.787-9.062,1.746c1.06-2.809-6.889-4.885-4.97-9.896c0.834-2.559,2.898,0.653,2.923,0.29\n\tc-0.434-1.07-2.608-5.541-2.923-6.985C96.587,150.793,95.342,147.033,98.984,146.692z\"/>\n</svg>\n\n      <!-- <img class=\"togetherjs-cursor-img\" src=\"http://localhost:8080/togetherjs/images/cursor.svg\"> -->\n      <span class=\"togetherjs-cursor-container\">\n        <span class=\"togetherjs-cursor-name\"></span>\n        <span style=\"display:none\" class=\"togetherjs-cursor-typing\" id=\"togetherjs-cursor-typebox\">\n          <span class=\"togetherjs-typing-ellipse-one\">&#9679;</span><span class=\"togetherjs-typing-ellipse-two\">&#9679;</span><span class=\"togetherjs-typing-ellipse-three\">&#9679;</span>\n        </span>\n        <!-- Displayed when the cursor is below the screen: -->\n        <span class=\"togetherjs-cursor-down\"></span>\n        <!-- Displayed when the cursor is above the screen: -->\n        <span class=\"togetherjs-cursor-up\"></span>\n      </span>\n    </div>\n\n    <!-- This is the element that goes around focused form elements: -->\n    <div id=\"togetherjs-template-focus\">\n      <div class=\"togetherjs-focus togetherjs-person-bordercolor\"></div>\n    </div>\n\n    <!-- This is a click: -->\n    <div id=\"togetherjs-template-click\" class=\"togetherjs-click togetherjs\">\n    </div>\n  </div>\n</div>\n",
    walkthrough: "<!--\n    Any elements with .togetherjs-walkthrough-firsttime will only be\n    displayed on during the first-time experience.  Any elements with\n    .togetherjs-walkthrough-not-firsttime will only be displayed when\n    the walkthrough is accessed through the Help menu.\n\n    Note you *cannot* use <section class=\"togetherjs-walkthrough-slide\n    togetherjs-walkthrough-firsttime\">: the number of sections must be the\n    same regardless.\n  -->\n<div id=\"togetherjs-walkthrough\" class=\"togetherjs-modal togetherjs-modal-wide\">\n  <header>Вы используете TOOL_NAME!<button class=\"togetherjs-close\"></button></header>\n\n  <div id=\"togetherjs-walkthrough-previous\"></div>\n  <div id=\"togetherjs-walkthrough-next\"></div>\n\n  <section class=\"togetherjs-walkthrough-slide\">\n    <p class=\"togetherjs-walkthrough-main-image\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-intro.png\"></p>\n\t<p>TOOL_NAME - это служба для Вашего сайта, которая помогает Вам сотрудничать с другими в реальном времени на сайте SITE_NAME </p>\n  </section>\n\n  <section class=\"togetherjs-walkthrough-slide\">\n    <div class=\"togetherjs-walkthrough-firsttime\">\n      <div class=\"togetherjs-walkthrough-main-image\">\n        <div class=\"togetherjs-walkthrough-avatar-section\">\n          <div class=\"togetherjs-avatar-preview togetherjs-person togetherjs-person-self\"></div>\n          <div class=\"togetherjs-avatar-upload-input\"><input type=\"file\" class=\"togetherjs-upload-avatar\"></div>\n        </div>\n        <input class=\"togetherjs-self-name\" type=\"text\" placeholder=\"Введите своё имя\">\n        <div class=\"togetherjs-swatch togetherjs-person-bgcolor-self\"></div>\n        <div class=\"togetherjs-save-settings\">\n          <button class=\"togetherjs-avatar-save togetherjs-primary\">\n            <span id=\"togetherjs-avatar-when-unsaved\">\"\"Сохранить\"\"</span>\n            <span id=\"togetherjs-avatar-when-saved\" style=\"display: none\">Сохранено!</span>\n          </button>\n        </div>\n      </div>\n      <p>Задайте свои аватар, имя и пользовательский цвет вверху. При желании изменить их позднее, щёлкните по кнопке Профиль.</p>\n    </div>\n    <div class=\"togetherjs-walkthrough-not-firsttime\">\n      <p class=\"togetherjs-walkthrough-main-image\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-profile.png\"></p>\n      <p>Вы можете изменить свои аватар, имя и пользовательский цвет, используя кнопку Профиль.</p>\n    </div>\n  </section>\n\n  <section class=\"togetherjs-walkthrough-slide\">\n    <p class=\"togetherjs-walkthrough-main-image togetherjs-ifnot-creator\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-invite.png\">\n    </p>\n    <p class=\"togetherjs-ifnot-creator\">Вы можете пригласить ещё друзей на Ваш сеанс, послав им ссылку с приглашением на панели TOOL_NAME.</p>\n    <p class=\"togetherjs-walkthrough-main-image togetherjs-if-creator\">\n      <span class=\"togetherjs-walkthrough-sendlink\">\n        Скопируйте и приклейте эту ссылку в IM или в имейл, чтобы пригласить друзей.<br>\n      </span>\n      <input type=\"text\" class=\"togetherjs-share-link\">\n    </p>\n    <p class=\"togetherjs-if-creator\">Пошлите другу ссылку вверху, чтобы он мог присоединиться к Вашему сеансу! Вы также можете найти эту ссылку с приглашением на панели TOOL_NAME.</p>\n  </section>\n\n  <section class=\"togetherjs-walkthrough-slide\">\n    <p class=\"togetherjs-walkthrough-main-image\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-participant.png\"></p>\n    <p>Друзья, которые присоединятся к Вашему сеансу TOOL_NAME, появятся здесь. Вы можете щёлкнуть по аватару друга, чтобы увидеть больше информации.</p>\n  </section>\n\n  <section class=\"togetherjs-walkthrough-slide\">\n    <p class=\"togetherjs-walkthrough-main-image\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-chat.png\"></p>\n    <p>Когда Ваши друзья присоединятся к Вашему сеансу TOOL_NAME, Вы сможете общаться с ними здесь!</p>\n  </section>\n\n  <section class=\"togetherjs-walkthrough-slide\">\n    <p class=\"togetherjs-walkthrough-main-image\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-rtc.png\"></p>\n    <p>Если Ваш браузер поддерживает аудио-чат, Вы можете запустить его нажатием на иконку микрофона. Узнайте побольше об этой экспериментальной функции <a href=\"https://github.com/mozilla/togetherjs/wiki/About-Audio-Chat-and-WebRTC\" target=\"_blank\">здесь</a>.</p>\n  </section>\n\n  <section class=\"togetherjs-walkthrough-slide\">\n    <p class=\"togetherjs-walkthrough-main-image\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-logo.png\"></p>\n    <p>Ну вот Вы и готовы использовать TOOL_NAME. Теперь начинайте сотрудничать на сайте SITE_NAME!</p>\n  </section>\n\n  <div style=\"display: none\">\n    <!-- There is one of these created for each slide: -->\n    <span id=\"togetherjs-template-walkthrough-slide-progress\" class=\"togetherjs-walkthrough-slide-progress\">&#9679;</span>\n  </div>\n  <section id=\"togetherjs-walkthrough-progress\">\n  </section>\n\n  <section class=\"togetherjs-buttons\">\n    <button class=\"togetherjs-primary togetherjs-dismiss\">Я готов!</button>\n  </section>\n\n</div><!-- /.togetherjs-modal -->\n",
    names: "Лысый Лис, Большой Бобёр, Умная Сова, Жирный Жираф, Серый Волк, Толстый Тюлень, Рыба-кит, Кисьян Котяра, Известная Игуана"
  };
});
