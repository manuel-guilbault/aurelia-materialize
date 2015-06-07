import 'jquery';
import 'materialize';

export {MaterializeSelect} from './select';
export {MaterializeSideNav} from './side-nav';
export {MaterializeValidationViewStrategy} from './validation-view-strategy';

export function configure(aurelia) {
  aurelia.globalizeResources(
    './select',
    './side-nav'
  );
}
