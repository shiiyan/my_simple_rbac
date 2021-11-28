class RBAC {
  constructor(roles) {
    if (typeof roles !== "object") {
      throw new TypeError("Expected an object as input");
    }
    this.roles = roles;
  }

  can(role, operation) {
    if (!this.roles[role]) {
      return false;
    }
    let $role = this.roles[role];

    if ($role.can.includes(operation)) {
      return true;
    }

    if (!$role.inherits || $role.inherits.length < 1) {
      return false;
    }

    return $role.inherits.some((childRole) => this.can(childRole, operation));
  }
}

export default RBAC;
