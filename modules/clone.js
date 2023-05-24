import isObject from './isObject.js';
import isArray from './isArray.js';
import extend from './extend.js';

// Create a (shallow-cloned) duplicate of an object.
// 浅拷贝对象
export default function clone(obj) {
  // 不是对象，直接返回
  if (!isObject(obj)) return obj
  // 是数组调用数组的slice方法进行浅拷贝，否则使用自定义extend方法创建浅拷贝
  return isArray(obj) ? obj.slice() : extend({}, obj)
}

