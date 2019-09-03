import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Initiative } from './components/Initiative';
import { InitiativeList } from './components/InitiativeList';

ReactDOM.render(
  <InitiativeList id="example">
    <Initiative id="001" initiativeValue={20} characterName="Legolas" />
    <Initiative id="002" initiativeValue={16} characterName="Aragorn" />
    <Initiative id="003" initiativeValue={2} characterName="Gimli" />
  </InitiativeList>
  , document.getElementById("example")  
);
