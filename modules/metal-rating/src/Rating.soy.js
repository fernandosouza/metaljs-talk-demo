/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Rating.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Rating.
 * @public
 */

goog.module('Rating.incrementaldom');

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
      'aria-valuemin', opt_data.options[0].value,
      'aria-valuemax', opt_data.options[opt_data.options.length - 1].value,
      'aria-valuenow', opt_data.options[opt_data.value] ? opt_data.options[opt_data.value].value : '',
      'aria-valuetext', opt_data.options[opt_data.value] ? opt_data.options[opt_data.value].title : '',
      'class', 'rating');
    if (opt_data.label) {
      ie_open('label', null, null,
          'class', 'rate-label');
        itext((goog.asserts.assert((opt_data.label) != null), opt_data.label));
      ie_close('label');
    }
    ie_open('div', null, null,
        'class', 'rating-items');
      var optionLimit18 = opt_data.options.length;
      for (var option18 = 0; option18 < optionLimit18; option18++) {
        ie_void('button', null, null,
            'aria-disabled', opt_data.disabled,
            'aria-pressed', option18 <= opt_data.value ? true : false,
            'aria-label', opt_data.options[option18].title,
            'class', 'btn rating-item ' + (option18 <= opt_data.value ? opt_data.cssClasses.on : opt_data.cssClasses.off),
            'data-index', option18,
            'title', opt_data.options[option18].title,
            'type', 'button');
      }
    ie_close('div');
    ie_open('input', null, null,
        'type', 'hidden',
        'aria-hidden', 'true',
        'name', opt_data.inputHiddenName,
        'value', opt_data.options[opt_data.value] ? opt_data.options[opt_data.value].value : opt_data.value);
    ie_close('input');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Rating.render';
}

exports.render.params = ["label","cssClasses","disabled","inputHiddenName","options","value"];
exports.render.types = {"label":"any","cssClasses":"any","disabled":"any","inputHiddenName":"any","options":"any","value":"any"};
templates = exports;
return exports;

});

class Rating extends Component {}
Soy.register(Rating, templates);
export default templates;
export { Rating, templates };
/* jshint ignore:end */