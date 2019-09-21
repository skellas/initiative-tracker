import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Initiative } from './components/presentational/Initiative';
import { InitiativeList } from './components/presentational/InitiativeList';
import { InitiativeContainer } from './components/containers/InitiativeContainer';

ReactDOM.render(
  <InitiativeContainer id="example">
    <InitiativeList id="list">
      <Initiative id="001" initiativeValue={20} characterName="Legolas" />
      <Initiative id="002" initiativeValue={16} characterName="Aragorn" />
      <Initiative id="003" initiativeValue={2} characterName="Gimli" />
    </InitiativeList>
  </InitiativeContainer>
  , document.getElementById("example")  
);
