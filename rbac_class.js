class RBAC {
  constructor(roles) {
    if (typeof roles !== "object") {
      throw new TypeError("Expected an object as input");
    }
    this.roles = roles;
  }

  can(role, operation) {
    return this.roles[role] && this.roles[role].can.includes(operation);
  }
}

export default RBAC;