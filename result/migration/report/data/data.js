var main_data = {
    "sum": [
        {
            "name": "total",
            "number": 8
        },
        {
            "name": "xsjs",
            "number": 10,
            "detail": {
                ".xsjs": 10
            }
        },
        {
            "name": "db",
            "number": 30,
            "detail": {
                ".calculationview": 10,
                ".hdbdd": 10,
                ".hdbschema": 5,
                ".hdbprocedure": 5
            }
        }
    ],
    "errors": {
        "number": 0,
        "list": []
    },
    "warnings": {
        "number": 35,
        "list": [
            {
                "type": "WARNING",
                "message": [
                    "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 9,
                            "column": 15
                        },
                        "end": {
                            "line": 9,
                            "column": 36
                        }
                    }
                ],
                "category": "SECURITY",
                "id": "SECURITY_4",
                "mid": 30
            },
            {
                "type": "WARNING",
                "message": [
                    "Database connection found.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 9,
                            "column": 15
                        },
                        "end": {
                            "line": 9,
                            "column": 36
                        }
                    }
                ],
                "category": "XSJS",
                "id": "XSJS_9",
                "mid": 32
            },
            {
                "type": "WARNING",
                "message": [
                    "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 26,
                            "column": 15
                        },
                        "end": {
                            "line": 26,
                            "column": 36
                        }
                    },
                    {
                        "start": {
                            "line": 154,
                            "column": 23
                        },
                        "end": {
                            "line": 154,
                            "column": 44
                        }
                    },
                    {
                        "start": {
                            "line": 192,
                            "column": 19
                        },
                        "end": {
                            "line": 192,
                            "column": 40
                        }
                    },
                    {
                        "start": {
                            "line": 232,
                            "column": 19
                        },
                        "end": {
                            "line": 232,
                            "column": 40
                        }
                    }
                ],
                "category": "SECURITY",
                "id": "SECURITY_4",
                "mid": 30
            },
            {
                "type": "WARNING",
                "message": [
                    "Database connection found.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 26,
                            "column": 15
                        },
                        "end": {
                            "line": 26,
                            "column": 36
                        }
                    },
                    {
                        "start": {
                            "line": 154,
                            "column": 23
                        },
                        "end": {
                            "line": 154,
                            "column": 44
                        }
                    },
                    {
                        "start": {
                            "line": 192,
                            "column": 19
                        },
                        "end": {
                            "line": 192,
                            "column": 40
                        }
                    },
                    {
                        "start": {
                            "line": 232,
                            "column": 19
                        },
                        "end": {
                            "line": 232,
                            "column": 40
                        }
                    }
                ],
                "category": "XSJS",
                "id": "XSJS_9",
                "mid": 32
            },
            {
                "type": "WARNING",
                "message": [
                    "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                ],
                "category": "SECURITY",
                "id": "SECURITY_1",
                "file": ""
            },
            {
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": null,
                "message": "the file in XS Classic package structure is protected from http access and will not be protected in new migrated XS Advanced",
                "type": "warning"
            },
            {
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": null,
                "message": "the file in XS Classic package structure is protected from http access and will not be protected in new migrated XS Advanced",
                "type": "warning"
            },
            {
                "type": "WARNING",
                "message": [
                    "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 9,
                            "column": 15
                        },
                        "end": {
                            "line": 9,
                            "column": 36
                        }
                    }
                ],
                "category": "SECURITY",
                "id": "SECURITY_4",
                "mid": 30
            },
            {
                "type": "WARNING",
                "message": [
                    "Database connection found.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 9,
                            "column": 15
                        },
                        "end": {
                            "line": 9,
                            "column": 36
                        }
                    }
                ],
                "category": "XSJS",
                "id": "XSJS_9",
                "mid": 32
            },
            {
                "type": "WARNING",
                "message": [
                    "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 26,
                            "column": 15
                        },
                        "end": {
                            "line": 26,
                            "column": 36
                        }
                    },
                    {
                        "start": {
                            "line": 154,
                            "column": 23
                        },
                        "end": {
                            "line": 154,
                            "column": 44
                        }
                    },
                    {
                        "start": {
                            "line": 192,
                            "column": 19
                        },
                        "end": {
                            "line": 192,
                            "column": 40
                        }
                    },
                    {
                        "start": {
                            "line": 232,
                            "column": 19
                        },
                        "end": {
                            "line": 232,
                            "column": 40
                        }
                    }
                ],
                "category": "SECURITY",
                "id": "SECURITY_4",
                "mid": 30
            },
            {
                "type": "WARNING",
                "message": [
                    "Database connection found.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 26,
                            "column": 15
                        },
                        "end": {
                            "line": 26,
                            "column": 36
                        }
                    },
                    {
                        "start": {
                            "line": 154,
                            "column": 23
                        },
                        "end": {
                            "line": 154,
                            "column": 44
                        }
                    },
                    {
                        "start": {
                            "line": 192,
                            "column": 19
                        },
                        "end": {
                            "line": 192,
                            "column": 40
                        }
                    },
                    {
                        "start": {
                            "line": 232,
                            "column": 19
                        },
                        "end": {
                            "line": 232,
                            "column": 40
                        }
                    }
                ],
                "category": "XSJS",
                "id": "XSJS_9",
                "mid": 32
            },
            {
                "type": "WARNING",
                "message": [
                    "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                ],
                "category": "SECURITY",
                "id": "SECURITY_1",
                "file": ""
            },
            {
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": null,
                "message": "the file in XS Classic package structure is protected from http access and will not be protected in new migrated XS Advanced",
                "type": "warning"
            },
            {
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": null,
                "message": "the file in XS Classic package structure is protected from http access and will not be protected in new migrated XS Advanced",
                "type": "warning"
            },
            {
                "type": "WARNING",
                "message": [
                    "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 9,
                            "column": 15
                        },
                        "end": {
                            "line": 9,
                            "column": 36
                        }
                    }
                ],
                "category": "SECURITY",
                "id": "SECURITY_4",
                "mid": 30
            },
            {
                "type": "WARNING",
                "message": [
                    "Database connection found.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 9,
                            "column": 15
                        },
                        "end": {
                            "line": 9,
                            "column": 36
                        }
                    }
                ],
                "category": "XSJS",
                "id": "XSJS_9",
                "mid": 32
            },
            {
                "type": "WARNING",
                "message": [
                    "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 26,
                            "column": 15
                        },
                        "end": {
                            "line": 26,
                            "column": 36
                        }
                    },
                    {
                        "start": {
                            "line": 154,
                            "column": 23
                        },
                        "end": {
                            "line": 154,
                            "column": 44
                        }
                    },
                    {
                        "start": {
                            "line": 192,
                            "column": 19
                        },
                        "end": {
                            "line": 192,
                            "column": 40
                        }
                    },
                    {
                        "start": {
                            "line": 232,
                            "column": 19
                        },
                        "end": {
                            "line": 232,
                            "column": 40
                        }
                    }
                ],
                "category": "SECURITY",
                "id": "SECURITY_4",
                "mid": 30
            },
            {
                "type": "WARNING",
                "message": [
                    "Database connection found.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 26,
                            "column": 15
                        },
                        "end": {
                            "line": 26,
                            "column": 36
                        }
                    },
                    {
                        "start": {
                            "line": 154,
                            "column": 23
                        },
                        "end": {
                            "line": 154,
                            "column": 44
                        }
                    },
                    {
                        "start": {
                            "line": 192,
                            "column": 19
                        },
                        "end": {
                            "line": 192,
                            "column": 40
                        }
                    },
                    {
                        "start": {
                            "line": 232,
                            "column": 19
                        },
                        "end": {
                            "line": 232,
                            "column": 40
                        }
                    }
                ],
                "category": "XSJS",
                "id": "XSJS_9",
                "mid": 32
            },
            {
                "type": "WARNING",
                "message": [
                    "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                ],
                "category": "SECURITY",
                "id": "SECURITY_1",
                "file": ""
            },
            {
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": null,
                "message": "the file in XS Classic package structure is protected from http access and will not be protected in new migrated XS Advanced",
                "type": "warning"
            },
            {
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": null,
                "message": "the file in XS Classic package structure is protected from http access and will not be protected in new migrated XS Advanced",
                "type": "warning"
            },
            {
                "type": "WARNING",
                "message": [
                    "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 9,
                            "column": 15
                        },
                        "end": {
                            "line": 9,
                            "column": 36
                        }
                    }
                ],
                "category": "SECURITY",
                "id": "SECURITY_4",
                "mid": 30
            },
            {
                "type": "WARNING",
                "message": [
                    "Database connection found.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 9,
                            "column": 15
                        },
                        "end": {
                            "line": 9,
                            "column": 36
                        }
                    }
                ],
                "category": "XSJS",
                "id": "XSJS_9",
                "mid": 32
            },
            {
                "type": "WARNING",
                "message": [
                    "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 26,
                            "column": 15
                        },
                        "end": {
                            "line": 26,
                            "column": 36
                        }
                    },
                    {
                        "start": {
                            "line": 154,
                            "column": 23
                        },
                        "end": {
                            "line": 154,
                            "column": 44
                        }
                    },
                    {
                        "start": {
                            "line": 192,
                            "column": 19
                        },
                        "end": {
                            "line": 192,
                            "column": 40
                        }
                    },
                    {
                        "start": {
                            "line": 232,
                            "column": 19
                        },
                        "end": {
                            "line": 232,
                            "column": 40
                        }
                    }
                ],
                "category": "SECURITY",
                "id": "SECURITY_4",
                "mid": 30
            },
            {
                "type": "WARNING",
                "message": [
                    "Database connection found.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 26,
                            "column": 15
                        },
                        "end": {
                            "line": 26,
                            "column": 36
                        }
                    },
                    {
                        "start": {
                            "line": 154,
                            "column": 23
                        },
                        "end": {
                            "line": 154,
                            "column": 44
                        }
                    },
                    {
                        "start": {
                            "line": 192,
                            "column": 19
                        },
                        "end": {
                            "line": 192,
                            "column": 40
                        }
                    },
                    {
                        "start": {
                            "line": 232,
                            "column": 19
                        },
                        "end": {
                            "line": 232,
                            "column": 40
                        }
                    }
                ],
                "category": "XSJS",
                "id": "XSJS_9",
                "mid": 32
            },
            {
                "type": "WARNING",
                "message": [
                    "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                ],
                "category": "SECURITY",
                "id": "SECURITY_1",
                "file": ""
            },
            {
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": null,
                "message": "the file in XS Classic package structure is protected from http access and will not be protected in new migrated XS Advanced",
                "type": "warning"
            },
            {
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": null,
                "message": "the file in XS Classic package structure is protected from http access and will not be protected in new migrated XS Advanced",
                "type": "warning"
            },
            {
                "type": "WARNING",
                "message": [
                    "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 9,
                            "column": 15
                        },
                        "end": {
                            "line": 9,
                            "column": 36
                        }
                    }
                ],
                "category": "SECURITY",
                "id": "SECURITY_4",
                "mid": 30
            },
            {
                "type": "WARNING",
                "message": [
                    "Database connection found.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 9,
                            "column": 15
                        },
                        "end": {
                            "line": 9,
                            "column": 36
                        }
                    }
                ],
                "category": "XSJS",
                "id": "XSJS_9",
                "mid": 32
            },
            {
                "type": "WARNING",
                "message": [
                    "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 26,
                            "column": 15
                        },
                        "end": {
                            "line": 26,
                            "column": 36
                        }
                    },
                    {
                        "start": {
                            "line": 154,
                            "column": 23
                        },
                        "end": {
                            "line": 154,
                            "column": 44
                        }
                    },
                    {
                        "start": {
                            "line": 192,
                            "column": 19
                        },
                        "end": {
                            "line": 192,
                            "column": 40
                        }
                    },
                    {
                        "start": {
                            "line": 232,
                            "column": 19
                        },
                        "end": {
                            "line": 232,
                            "column": 40
                        }
                    }
                ],
                "category": "SECURITY",
                "id": "SECURITY_4",
                "mid": 30
            },
            {
                "type": "WARNING",
                "message": [
                    "Database connection found.",
                    "$.hdb.getConnection"
                ],
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": [
                    {
                        "start": {
                            "line": 26,
                            "column": 15
                        },
                        "end": {
                            "line": 26,
                            "column": 36
                        }
                    },
                    {
                        "start": {
                            "line": 154,
                            "column": 23
                        },
                        "end": {
                            "line": 154,
                            "column": 44
                        }
                    },
                    {
                        "start": {
                            "line": 192,
                            "column": 19
                        },
                        "end": {
                            "line": 192,
                            "column": 40
                        }
                    },
                    {
                        "start": {
                            "line": 232,
                            "column": 19
                        },
                        "end": {
                            "line": 232,
                            "column": 40
                        }
                    }
                ],
                "category": "XSJS",
                "id": "XSJS_9",
                "mid": 32
            },
            {
                "type": "WARNING",
                "message": [
                    "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                ],
                "category": "SECURITY",
                "id": "SECURITY_1",
                "file": ""
            },
            {
                "file": "xsjs/lib/LM/currConv.xsjs",
                "loc": null,
                "message": "the file in XS Classic package structure is protected from http access and will not be protected in new migrated XS Advanced",
                "type": "warning"
            },
            {
                "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                "loc": null,
                "message": "the file in XS Classic package structure is protected from http access and will not be protected in new migrated XS Advanced",
                "type": "warning"
            }
        ]
    },
    "infos": {
        "number": 5,
        "list": [
            {
                "type": "INFO",
                "message": [
                    "The {0} file is no longer needed in XS Advanced projects.",
                    ".hdbschema"
                ],
                "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                "category": "DELETE",
                "id": "DELETE_1",
                "file": "migration/orig-src/LM/LM.hdbschema"
            },
            {
                "type": "INFO",
                "message": [
                    "The {0} file is no longer needed in XS Advanced projects.",
                    ".hdbschema"
                ],
                "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                "category": "DELETE",
                "id": "DELETE_1",
                "file": "migration/orig-src/LM/LM.hdbschema"
            },
            {
                "type": "INFO",
                "message": [
                    "The {0} file is no longer needed in XS Advanced projects.",
                    ".hdbschema"
                ],
                "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                "category": "DELETE",
                "id": "DELETE_1",
                "file": "migration/orig-src/LM/LM.hdbschema"
            },
            {
                "type": "INFO",
                "message": [
                    "The {0} file is no longer needed in XS Advanced projects.",
                    ".hdbschema"
                ],
                "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                "category": "DELETE",
                "id": "DELETE_1",
                "file": "migration/orig-src/LM/LM.hdbschema"
            },
            {
                "type": "INFO",
                "message": [
                    "The {0} file is no longer needed in XS Advanced projects.",
                    ".hdbschema"
                ],
                "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                "category": "DELETE",
                "id": "DELETE_1",
                "file": "migration/orig-src/LM/LM.hdbschema"
            }
        ]
    },
    "steps": [
        {
            "priority": 4,
            "always-shown": true,
            "name": "Migration of Security Concept Required",
            "desc": "The security concept has changed with XS Advanced and is incompatible with XS Classic. Manual migration steps are required in order to complete the migration of this application to XS Advanced. <br>For information about the XS Advanced security concept read the XS Advanced Migration Guide.",
            "link": {
                "info": "description",
                "url": "undefined#security"
            },
            "messages": {
                "WARNING": [
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "The role access privileges need to be checked when using {0}. Check the migration guide for further detail.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_4",
                        "mid": 30
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    }
                ]
            },
            "list": [
                {
                    "text": "WARNING",
                    "value": 45
                }
            ]
        },
        {
            "priority": 7,
            "name": "XSJS Migration Required",
            "desc": "Statements in xsjs and xsjslib JavaScript files have been found that need to be migrated manually. Additionally, we use the async-migrator to migrate xsjs to async-xsjs. Please check the async-migration tab for more details.",
            "link": {
                "info": "description",
                "url": "undefined#xsjs"
            },
            "messages": {
                "WARNING": [
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/currConv.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 9,
                                    "column": 15
                                },
                                "end": {
                                    "line": 9,
                                    "column": 36
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    },
                    {
                        "type": "WARNING",
                        "message": [
                            "Database connection found.",
                            "$.hdb.getConnection"
                        ],
                        "file": "xsjs/lib/LM/poWorklistQuery.xsjs",
                        "loc": [
                            {
                                "start": {
                                    "line": 26,
                                    "column": 15
                                },
                                "end": {
                                    "line": 26,
                                    "column": 36
                                }
                            },
                            {
                                "start": {
                                    "line": 154,
                                    "column": 23
                                },
                                "end": {
                                    "line": 154,
                                    "column": 44
                                }
                            },
                            {
                                "start": {
                                    "line": 192,
                                    "column": 19
                                },
                                "end": {
                                    "line": 192,
                                    "column": 40
                                }
                            },
                            {
                                "start": {
                                    "line": 232,
                                    "column": 19
                                },
                                "end": {
                                    "line": 232,
                                    "column": 40
                                }
                            }
                        ],
                        "category": "XSJS",
                        "id": "XSJS_9",
                        "mid": 32
                    }
                ]
            },
            "list": [
                {
                    "text": "WARNING",
                    "value": 30
                }
            ]
        },
        {
            "priority": 11,
            "name": "Objects Which Have Not Been Migrated",
            "desc": "The following objects have not been migrated because they are either not relevant anymore or have been successfully migrated to another object type.",
            "link": {
                "info": "description",
                "url": "undefined#delete"
            },
            "messages": {
                "INFO": [
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    },
                    {
                        "type": "INFO",
                        "message": [
                            "The {0} file is no longer needed in XS Advanced projects.",
                            ".hdbschema"
                        ],
                        "description": "The object type has not been migrated and is no longer relevant for XS Advanced projects. There is no loss of functionality.",
                        "category": "DELETE",
                        "id": "DELETE_1",
                        "file": "migration/orig-src/LM/LM.hdbschema"
                    }
                ]
            },
            "list": [
                {
                    "text": "INFO",
                    "value": 15
                }
            ]
        }
    ],
    "task": {
        "dus": [
            {
                "name": "LM",
                "vendor": "sap.com",
                "version": "0.0.0"
            }
        ],
        "packages": [
            "LM"
        ]
    },
    "project": {
        "name": "LM",
        "vendor": "sap.com",
        "version": "0.0.0",
        "description": ""
    },
    "cmdline": "--generate-manifests \"true\" --target-dir \"/home/user/projects/result\"",
    "isoTime": "2024-03-20T08:11:31.423Z",
    "mig-tool-version": "1.1.0",
    "fileNameAsync": "/home/user/projects/result/console_output.txt",
    "async_data": "migrated file:  currConv.xsjs \n\nmigrated file:  poWorklistQuery.xsjs \n\nmigrated file:  main.js \n\ngetFilter has been made async\n\ngetTotalOrders has been made async\n\ndownloadExcel has been made async\n\ndownloadZip has been made async\n\nDeleted: /home/user/projects/result/async_xsjs/lib/LM/currConv.xsjs.ast.json\n\nDeleted: /home/user/projects/result/async_xsjs/lib/LM/poWorklistQuery.xsjs.ast.json\n\nDeleted: /home/user/projects/result/async_xsjs/main.js.ast.json\n\n",
    "async_warnings": [
        "SAP HANA XSJS applications are based on synchronous API. On the other hand, Node.js is an asynchronous runtime. Thus, for XSJS applications that run on Node.js there is a certain code incompatibility. We have come up with @sap/async-xsjs module to fix this incompatibility. We use async-migrator to migrate the code from xsjs to async-xsjs.",
        "Please be aware of the following potential issues while utilizing the async-migrator for XSJS to async-xsjs code migrations:",
        "1. Although we use async-migrator to migrate a JavaScript project source code to async-await model by replacing sync function calls to async/await statements, the migrator might sometimes miss adding an async/await keyword to a function defination/call. Therefore, developers should thoroughly review and test the converted code for any potential issues.",
        "2. In the async-migrator, we use auto Escodegen option that automatically determines whether to use single or double quotes for string literals in the generated code. This might sometimes lead to error in the String manipulation functions. ",
        "3. Node 20 has been implemented. Consequently, it is critical to update all dependent node modules to versions compatible with Node 20. Any modules not supported must be replaced or removed to ensure optimal functionality."
    ],
    "system": {
        "host": "localhost",
        "port": "30315",
        "user": "SYSTEM",
        "sid": "CFM",
        "hana_version": "2.00.059.09.1686579463"
    }
};