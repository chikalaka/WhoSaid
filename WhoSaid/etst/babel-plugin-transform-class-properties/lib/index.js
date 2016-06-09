/*istanbul ignore next*/"use strict";

exports.__esModule = true;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = function ( /*istanbul ignore next*/_ref) {
  /*istanbul ignore next*/var t = _ref.types;

  var findBareSupers = { /*istanbul ignore next*/
    Super: function Super(path) {
      if (path.parentPath.isCallExpression({ callee: path.node })) {
        this.push(path.parentPath);
      }
    }
  };

  var referenceVisitor = { /*istanbul ignore next*/
    ReferencedIdentifier: function ReferencedIdentifier(path) {
      if (this.scope.hasOwnBinding(path.node.name)) {
        this.collision = true;
        path.skip();
      }
    }
  };

  return {
    inherits: require("babel-plugin-syntax-class-properties"),

    visitor: { /*istanbul ignore next*/
      Class: function Class(path) {
        var isDerived = !!path.node.superClass;
        var constructor = /*istanbul ignore next*/void 0;
        var props = [];
        var body = path.get("body");

        for ( /*istanbul ignore next*/var _iterator = body.get("body"), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
          /*istanbul ignore next*/
          var _ref2;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref2 = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref2 = _i.value;
          }

          var _path = _ref2;

          if (_path.isClassProperty()) {
            props.push(_path);
          } else if (_path.isClassMethod({ kind: "constructor" })) {
            constructor = _path;
          }
        }

        if (!props.length) return;

        var nodes = [];
        var ref = /*istanbul ignore next*/void 0;

        if (path.isClassExpression() || !path.node.id) {
          ref = path.scope.generateUidIdentifier("class");
        } else {
          // path.isClassDeclaration() && path.node.id
          ref = path.node.id;
        }

        var instanceBody = [];

        for ( /*istanbul ignore next*/var _iterator2 = props, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
          /*istanbul ignore next*/
          var _ref3;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref3 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref3 = _i2.value;
          }

          var _prop = _ref3;

          var propNode = _prop.node;
          if (propNode.decorators && propNode.decorators.length > 0) continue;
          if (!propNode.value) continue;

          var isStatic = propNode.static;

          if (isStatic) {
            nodes.push(t.expressionStatement(t.assignmentExpression("=", t.memberExpression(ref, propNode.key), propNode.value)));
          } else {
            instanceBody.push(t.expressionStatement(t.assignmentExpression("=", t.memberExpression(t.thisExpression(), propNode.key), propNode.value)));
          }
        }

        if (instanceBody.length) {
          if (!constructor) {
            var newConstructor = t.classMethod("constructor", t.identifier("constructor"), [], t.blockStatement([]));
            if (isDerived) {
              newConstructor.params = [t.restElement(t.identifier("args"))];
              newConstructor.body.body.push(t.returnStatement(t.callExpression(t.super(), [t.spreadElement(t.identifier("args"))])));
            }
            /*istanbul ignore next*/
            var _body$unshiftContaine = body.unshiftContainer("body", newConstructor);

            /*istanbul ignore next*/constructor = _body$unshiftContaine[0];
          }

          var collisionState = {
            collision: false,
            scope: constructor.scope
          };

          for ( /*istanbul ignore next*/var _iterator3 = props, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
            /*istanbul ignore next*/
            var _ref4;

            if (_isArray3) {
              if (_i3 >= _iterator3.length) break;
              _ref4 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done) break;
              _ref4 = _i3.value;
            }

            var prop = _ref4;

            prop.traverse(referenceVisitor, collisionState);
            if (collisionState.collision) break;
          }

          if (collisionState.collision) {
            var initialisePropsRef = path.scope.generateUidIdentifier("initialiseProps");

            nodes.push(t.variableDeclaration("var", [t.variableDeclarator(initialisePropsRef, t.functionExpression(null, [], t.blockStatement(instanceBody)))]));

            instanceBody = [t.expressionStatement(t.callExpression(t.memberExpression(initialisePropsRef, t.identifier("call")), [t.thisExpression()]))];
          }

          //

          if (isDerived) {
            var bareSupers = [];
            constructor.traverse(findBareSupers, bareSupers);
            for ( /*istanbul ignore next*/var _iterator4 = bareSupers, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
              /*istanbul ignore next*/
              var _ref5;

              if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                _ref5 = _iterator4[_i4++];
              } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                _ref5 = _i4.value;
              }

              var bareSuper = _ref5;

              bareSuper.insertAfter(instanceBody);
            }
          } else {
            constructor.get("body").unshiftContainer("body", instanceBody);
          }
        }

        for ( /*istanbul ignore next*/var _iterator5 = props, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
          /*istanbul ignore next*/
          var _ref6;

          if (_isArray5) {
            if (_i5 >= _iterator5.length) break;
            _ref6 = _iterator5[_i5++];
          } else {
            _i5 = _iterator5.next();
            if (_i5.done) break;
            _ref6 = _i5.value;
          }

          var _prop2 = _ref6;

          _prop2.remove();
        }

        if (!nodes.length) return;

        if (path.isClassExpression()) {
          path.scope.push({ id: ref });
          path.replaceWith(t.assignmentExpression("=", ref, path.node));
        } else {
          // path.isClassDeclaration()
          if (!path.node.id) {
            path.node.id = ref;
          }

          if (path.parentPath.isExportDeclaration()) {
            path = path.parentPath;
          }
        }

        path.insertAfter(nodes);
      },
      /*istanbul ignore next*/ArrowFunctionExpression: function ArrowFunctionExpression(path) {
        var classExp = path.get("body");
        if (!classExp.isClassExpression()) return;

        var body = classExp.get("body");
        var members = body.get("body");
        if (members.some(function (member) /*istanbul ignore next*/{
          return member.isClassProperty();
        })) {
          path.ensureBlock();
        }
      }
    }
  };
};

/*istanbul ignore next*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports["default"]; /* eslint max-len: 0 */