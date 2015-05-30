export {MaterializeSelect} from './select';
export {MaterializeSideNav} from './side-nav';

export function configure(aurelia) {
  aurelia.globalizeResources(
    './select',
    './side-nav'
  );
}