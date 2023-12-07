import {
  defineNamespace,
  Model as СправДолMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-30-справ-дол';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СправДолMixin, {
});

defineNamespace(Model);

export default Model;
