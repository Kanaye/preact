import { ATTR_KEY } from './constants';
export const elementData = new WeakMap();

export function set(dom, data) {
	let original = getAll(dom);
	data = Object.assign({}, original, data);
	elementData.set(dom, data);
	return data;
}

export function getAll(dom) {
	return elementData.get(dom) || {};
}

export function getAttr(dom) {
	return getAll(dom)[ATTR_KEY];
}

export function del(dom) {
	set(dom, {_component: null});
}

export function getComponent(dom) {
	return getAll(dom)._component;
}

export function setAttr(dom, attr) {
	return set(dom, { [ATTR_KEY]: attr })[ATTR_KEY];
}
