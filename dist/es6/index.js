import 'jquery';
import 'materialize';

export {MaterialSelect} from './select';
export {MaterialSideNav} from './side-nav';
export {MaterialToast} from './toast';
export {MaterialDropDown} from './dropdown';
export {MaterialCollapsible} from './collapsible';
export {MaterialValidationViewStrategy} from './validation-view-strategy';

export function configure(aurelia) {
    aurelia.globalizeResources(
      './select',
      './side-nav',
      './toast',
      './dropdown',
      './collapsible'
    );
}
