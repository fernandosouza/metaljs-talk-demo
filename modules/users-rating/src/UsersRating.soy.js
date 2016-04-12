/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from UsersRating.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace UsersRating.
 * @public
 */

goog.module('UsersRating.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'users-rating' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    ie_open('h2');
      itext('Users List');
    ie_close('h2');
    var commentLimit6 = opt_data.comments.length;
    for (var comment6 = 0; comment6 < commentLimit6; comment6++) {
      ie_open('div', null, null,
          'class', 'panel panel-default');
        ie_open('div', null, null,
            'class', 'panel-heading');
          ie_open('h3', null, null,
              'class', 'panel-title');
            itext((goog.asserts.assert((opt_data.comments[comment6].name) != null), opt_data.comments[comment6].name));
            if (opt_data.comments[comment6].rating > 3) {
              $labelsuccess({rating: opt_data.comments[comment6].rating}, null, opt_ijData);
            }
            if (opt_data.comments[comment6].rating == 3) {
              $labelwarning({rating: opt_data.comments[comment6].rating}, null, opt_ijData);
            }
            if (opt_data.comments[comment6].rating < 3) {
              $labelerror({rating: opt_data.comments[comment6].rating}, null, opt_ijData);
            }
          ie_close('h3');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'panel-body');
          itext((goog.asserts.assert((opt_data.comments[comment6].comment) != null), opt_data.comments[comment6].comment));
        ie_close('div');
      ie_close('div');
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'UsersRating.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $labelsuccess(opt_data, opt_ignored, opt_ijData) {
  ie_open('span', null, null,
      'class', 'label label-success');
    itext((goog.asserts.assert((opt_data.rating) != null), opt_data.rating));
  ie_close('span');
}
exports.labelsuccess = $labelsuccess;
if (goog.DEBUG) {
  $labelsuccess.soyTemplateName = 'UsersRating.labelsuccess';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $labelwarning(opt_data, opt_ignored, opt_ijData) {
  ie_open('span', null, null,
      'class', 'label label-warning');
    itext((goog.asserts.assert((opt_data.rating) != null), opt_data.rating));
  ie_close('span');
}
exports.labelwarning = $labelwarning;
if (goog.DEBUG) {
  $labelwarning.soyTemplateName = 'UsersRating.labelwarning';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $labelerror(opt_data, opt_ignored, opt_ijData) {
  ie_open('span', null, null,
      'class', 'label label-danger');
    itext((goog.asserts.assert((opt_data.rating) != null), opt_data.rating));
  ie_close('span');
}
exports.labelerror = $labelerror;
if (goog.DEBUG) {
  $labelerror.soyTemplateName = 'UsersRating.labelerror';
}

exports.render.params = ["elementClasses","comments"];
exports.render.types = {"elementClasses":"any","comments":"any"};
exports.labelsuccess.params = ["rating"];
exports.labelsuccess.types = {"rating":"any"};
exports.labelwarning.params = ["rating"];
exports.labelwarning.types = {"rating":"any"};
exports.labelerror.params = ["rating"];
exports.labelerror.types = {"rating":"any"};
templates = exports;
return exports;

});

class UsersRating extends Component {}
Soy.register(UsersRating, templates);
export default templates;
export { UsersRating, templates };
/* jshint ignore:end */
