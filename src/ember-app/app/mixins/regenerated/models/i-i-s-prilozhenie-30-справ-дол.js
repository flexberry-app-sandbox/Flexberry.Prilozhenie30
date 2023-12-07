import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  должность: DS.attr('string')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-prilozhenie-30-справ-дол.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
