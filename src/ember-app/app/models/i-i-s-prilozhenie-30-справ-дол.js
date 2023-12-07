import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as СправДолMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-30-справ-дол';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СправДолMixin, Validations, {
});

export default Model;
