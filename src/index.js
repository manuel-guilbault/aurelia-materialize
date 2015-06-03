import 'jquery';
import 'materialize/bin/materialize';
import 'materialize/bin/materialize.css!';

export {MaterializeSelect} from './select';
export {MaterializeSideNav} from './side-nav';
export {MaterializeValidationViewStrategy} from './validation-view-strategy';

export function configure(aurelia) {
  aurelia.globalizeResources(
    './select',
    './side-nav'
  );
}