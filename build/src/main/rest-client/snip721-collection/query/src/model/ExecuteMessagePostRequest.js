/**
 * Keych API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ExecuteMessagePostRequestOneOf from './ExecuteMessagePostRequestOneOf';
import ExecuteMessagePostRequestOneOf1 from './ExecuteMessagePostRequestOneOf1';
import ExecuteMessagePostRequestOneOf10 from './ExecuteMessagePostRequestOneOf10';
import ExecuteMessagePostRequestOneOf10BatchNftDossier from './ExecuteMessagePostRequestOneOf10BatchNftDossier';
import ExecuteMessagePostRequestOneOf11 from './ExecuteMessagePostRequestOneOf11';
import ExecuteMessagePostRequestOneOf11TokenApprovals from './ExecuteMessagePostRequestOneOf11TokenApprovals';
import ExecuteMessagePostRequestOneOf12 from './ExecuteMessagePostRequestOneOf12';
import ExecuteMessagePostRequestOneOf12InventoryApprovals from './ExecuteMessagePostRequestOneOf12InventoryApprovals';
import ExecuteMessagePostRequestOneOf13 from './ExecuteMessagePostRequestOneOf13';
import ExecuteMessagePostRequestOneOf13ApprovedForAll from './ExecuteMessagePostRequestOneOf13ApprovedForAll';
import ExecuteMessagePostRequestOneOf14 from './ExecuteMessagePostRequestOneOf14';
import ExecuteMessagePostRequestOneOf14Tokens from './ExecuteMessagePostRequestOneOf14Tokens';
import ExecuteMessagePostRequestOneOf15 from './ExecuteMessagePostRequestOneOf15';
import ExecuteMessagePostRequestOneOf15NumTokensOfOwner from './ExecuteMessagePostRequestOneOf15NumTokensOfOwner';
import ExecuteMessagePostRequestOneOf16 from './ExecuteMessagePostRequestOneOf16';
import ExecuteMessagePostRequestOneOf17 from './ExecuteMessagePostRequestOneOf17';
import ExecuteMessagePostRequestOneOf18 from './ExecuteMessagePostRequestOneOf18';
import ExecuteMessagePostRequestOneOf19 from './ExecuteMessagePostRequestOneOf19';
import ExecuteMessagePostRequestOneOf2 from './ExecuteMessagePostRequestOneOf2';
import ExecuteMessagePostRequestOneOf20 from './ExecuteMessagePostRequestOneOf20';
import ExecuteMessagePostRequestOneOf20VerifyTransferApproval from './ExecuteMessagePostRequestOneOf20VerifyTransferApproval';
import ExecuteMessagePostRequestOneOf21 from './ExecuteMessagePostRequestOneOf21';
import ExecuteMessagePostRequestOneOf21TransactionHistory from './ExecuteMessagePostRequestOneOf21TransactionHistory';
import ExecuteMessagePostRequestOneOf22 from './ExecuteMessagePostRequestOneOf22';
import ExecuteMessagePostRequestOneOf22RegisteredCodeHash from './ExecuteMessagePostRequestOneOf22RegisteredCodeHash';
import ExecuteMessagePostRequestOneOf23 from './ExecuteMessagePostRequestOneOf23';
import ExecuteMessagePostRequestOneOf23RoyaltyInfo from './ExecuteMessagePostRequestOneOf23RoyaltyInfo';
import ExecuteMessagePostRequestOneOf24 from './ExecuteMessagePostRequestOneOf24';
import ExecuteMessagePostRequestOneOf25 from './ExecuteMessagePostRequestOneOf25';
import ExecuteMessagePostRequestOneOf25WithPermit from './ExecuteMessagePostRequestOneOf25WithPermit';
import ExecuteMessagePostRequestOneOf3 from './ExecuteMessagePostRequestOneOf3';
import ExecuteMessagePostRequestOneOf3NumTokens from './ExecuteMessagePostRequestOneOf3NumTokens';
import ExecuteMessagePostRequestOneOf4 from './ExecuteMessagePostRequestOneOf4';
import ExecuteMessagePostRequestOneOf4AllTokens from './ExecuteMessagePostRequestOneOf4AllTokens';
import ExecuteMessagePostRequestOneOf5 from './ExecuteMessagePostRequestOneOf5';
import ExecuteMessagePostRequestOneOf5OwnerOf from './ExecuteMessagePostRequestOneOf5OwnerOf';
import ExecuteMessagePostRequestOneOf6 from './ExecuteMessagePostRequestOneOf6';
import ExecuteMessagePostRequestOneOf6NftInfo from './ExecuteMessagePostRequestOneOf6NftInfo';
import ExecuteMessagePostRequestOneOf7 from './ExecuteMessagePostRequestOneOf7';
import ExecuteMessagePostRequestOneOf8 from './ExecuteMessagePostRequestOneOf8';
import ExecuteMessagePostRequestOneOf8PrivateMetadata from './ExecuteMessagePostRequestOneOf8PrivateMetadata';
import ExecuteMessagePostRequestOneOf9 from './ExecuteMessagePostRequestOneOf9';

/**
 * The ExecuteMessagePostRequest model module.
 * @module model/ExecuteMessagePostRequest
 * @version 1.0.0
 */
class ExecuteMessagePostRequest {
    /**
     * Constructs a new <code>ExecuteMessagePostRequest</code>.
     * @alias module:model/ExecuteMessagePostRequest
     * @param {(module:model/ExecuteMessagePostRequestOneOf|module:model/ExecuteMessagePostRequestOneOf1|module:model/ExecuteMessagePostRequestOneOf10|module:model/ExecuteMessagePostRequestOneOf11|module:model/ExecuteMessagePostRequestOneOf12|module:model/ExecuteMessagePostRequestOneOf13|module:model/ExecuteMessagePostRequestOneOf14|module:model/ExecuteMessagePostRequestOneOf15|module:model/ExecuteMessagePostRequestOneOf16|module:model/ExecuteMessagePostRequestOneOf17|module:model/ExecuteMessagePostRequestOneOf18|module:model/ExecuteMessagePostRequestOneOf19|module:model/ExecuteMessagePostRequestOneOf2|module:model/ExecuteMessagePostRequestOneOf20|module:model/ExecuteMessagePostRequestOneOf21|module:model/ExecuteMessagePostRequestOneOf22|module:model/ExecuteMessagePostRequestOneOf23|module:model/ExecuteMessagePostRequestOneOf24|module:model/ExecuteMessagePostRequestOneOf25|module:model/ExecuteMessagePostRequestOneOf3|module:model/ExecuteMessagePostRequestOneOf4|module:model/ExecuteMessagePostRequestOneOf5|module:model/ExecuteMessagePostRequestOneOf6|module:model/ExecuteMessagePostRequestOneOf7|module:model/ExecuteMessagePostRequestOneOf8|module:model/ExecuteMessagePostRequestOneOf9)} instance The actual instance to initialize ExecuteMessagePostRequest.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf1") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf1.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf1 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf1.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf1
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf1: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf2") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf2.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf2 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf2.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf2
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf2: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf3") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf3.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf3 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf3.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf3
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf3: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf4") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf4.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf4 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf4.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf4
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf4: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf5") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf5.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf5 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf5.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf5
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf5: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf6") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf6.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf6 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf6.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf6
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf6: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf7") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf7.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf7 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf7.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf7
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf7: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf8") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf8.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf8 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf8.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf8
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf8: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf9") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf9.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf9 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf9.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf9
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf9: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf10") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf10.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf10 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf10.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf10
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf10: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf11") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf11.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf11 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf11.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf11
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf11: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf12") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf12.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf12 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf12.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf12
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf12: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf13") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf13.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf13 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf13.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf13
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf13: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf14") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf14.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf14 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf14.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf14
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf14: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf15") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf15.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf15 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf15.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf15
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf15: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf16") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf16.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf16 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf16.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf16
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf16: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf17") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf17.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf17 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf17.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf17
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf17: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf18") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf18.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf18 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf18.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf18
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf18: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf19") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf19.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf19 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf19.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf19
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf19: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf20") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf20.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf20 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf20.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf20
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf20: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf21") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf21.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf21 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf21.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf21
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf21: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf22") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf22.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf22 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf22.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf22
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf22: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf23") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf23.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf23 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf23.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf23
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf23: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf24") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf24.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf24 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf24.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf24
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf24: " + err)
        }

        try {
            if (typeof instance === "ExecuteMessagePostRequestOneOf25") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExecuteMessagePostRequestOneOf25.validateJSON(instance); // throw an exception if no match
                // create ExecuteMessagePostRequestOneOf25 from JS object
                this.actualInstance = ExecuteMessagePostRequestOneOf25.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExecuteMessagePostRequestOneOf25
            errorMessages.push("Failed to construct ExecuteMessagePostRequestOneOf25: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `ExecuteMessagePostRequest` with oneOf schemas ExecuteMessagePostRequestOneOf, ExecuteMessagePostRequestOneOf1, ExecuteMessagePostRequestOneOf10, ExecuteMessagePostRequestOneOf11, ExecuteMessagePostRequestOneOf12, ExecuteMessagePostRequestOneOf13, ExecuteMessagePostRequestOneOf14, ExecuteMessagePostRequestOneOf15, ExecuteMessagePostRequestOneOf16, ExecuteMessagePostRequestOneOf17, ExecuteMessagePostRequestOneOf18, ExecuteMessagePostRequestOneOf19, ExecuteMessagePostRequestOneOf2, ExecuteMessagePostRequestOneOf20, ExecuteMessagePostRequestOneOf21, ExecuteMessagePostRequestOneOf22, ExecuteMessagePostRequestOneOf23, ExecuteMessagePostRequestOneOf24, ExecuteMessagePostRequestOneOf25, ExecuteMessagePostRequestOneOf3, ExecuteMessagePostRequestOneOf4, ExecuteMessagePostRequestOneOf5, ExecuteMessagePostRequestOneOf6, ExecuteMessagePostRequestOneOf7, ExecuteMessagePostRequestOneOf8, ExecuteMessagePostRequestOneOf9. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `ExecuteMessagePostRequest` with oneOf schemas ExecuteMessagePostRequestOneOf, ExecuteMessagePostRequestOneOf1, ExecuteMessagePostRequestOneOf10, ExecuteMessagePostRequestOneOf11, ExecuteMessagePostRequestOneOf12, ExecuteMessagePostRequestOneOf13, ExecuteMessagePostRequestOneOf14, ExecuteMessagePostRequestOneOf15, ExecuteMessagePostRequestOneOf16, ExecuteMessagePostRequestOneOf17, ExecuteMessagePostRequestOneOf18, ExecuteMessagePostRequestOneOf19, ExecuteMessagePostRequestOneOf2, ExecuteMessagePostRequestOneOf20, ExecuteMessagePostRequestOneOf21, ExecuteMessagePostRequestOneOf22, ExecuteMessagePostRequestOneOf23, ExecuteMessagePostRequestOneOf24, ExecuteMessagePostRequestOneOf25, ExecuteMessagePostRequestOneOf3, ExecuteMessagePostRequestOneOf4, ExecuteMessagePostRequestOneOf5, ExecuteMessagePostRequestOneOf6, ExecuteMessagePostRequestOneOf7, ExecuteMessagePostRequestOneOf8, ExecuteMessagePostRequestOneOf9. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequest} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequest} The populated <code>ExecuteMessagePostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        return new ExecuteMessagePostRequest(data);
    }

    /**
     * Gets the actual instance, which can be <code>ExecuteMessagePostRequestOneOf</code>, <code>ExecuteMessagePostRequestOneOf1</code>, <code>ExecuteMessagePostRequestOneOf10</code>, <code>ExecuteMessagePostRequestOneOf11</code>, <code>ExecuteMessagePostRequestOneOf12</code>, <code>ExecuteMessagePostRequestOneOf13</code>, <code>ExecuteMessagePostRequestOneOf14</code>, <code>ExecuteMessagePostRequestOneOf15</code>, <code>ExecuteMessagePostRequestOneOf16</code>, <code>ExecuteMessagePostRequestOneOf17</code>, <code>ExecuteMessagePostRequestOneOf18</code>, <code>ExecuteMessagePostRequestOneOf19</code>, <code>ExecuteMessagePostRequestOneOf2</code>, <code>ExecuteMessagePostRequestOneOf20</code>, <code>ExecuteMessagePostRequestOneOf21</code>, <code>ExecuteMessagePostRequestOneOf22</code>, <code>ExecuteMessagePostRequestOneOf23</code>, <code>ExecuteMessagePostRequestOneOf24</code>, <code>ExecuteMessagePostRequestOneOf25</code>, <code>ExecuteMessagePostRequestOneOf3</code>, <code>ExecuteMessagePostRequestOneOf4</code>, <code>ExecuteMessagePostRequestOneOf5</code>, <code>ExecuteMessagePostRequestOneOf6</code>, <code>ExecuteMessagePostRequestOneOf7</code>, <code>ExecuteMessagePostRequestOneOf8</code>, <code>ExecuteMessagePostRequestOneOf9</code>.
     * @return {(module:model/ExecuteMessagePostRequestOneOf|module:model/ExecuteMessagePostRequestOneOf1|module:model/ExecuteMessagePostRequestOneOf10|module:model/ExecuteMessagePostRequestOneOf11|module:model/ExecuteMessagePostRequestOneOf12|module:model/ExecuteMessagePostRequestOneOf13|module:model/ExecuteMessagePostRequestOneOf14|module:model/ExecuteMessagePostRequestOneOf15|module:model/ExecuteMessagePostRequestOneOf16|module:model/ExecuteMessagePostRequestOneOf17|module:model/ExecuteMessagePostRequestOneOf18|module:model/ExecuteMessagePostRequestOneOf19|module:model/ExecuteMessagePostRequestOneOf2|module:model/ExecuteMessagePostRequestOneOf20|module:model/ExecuteMessagePostRequestOneOf21|module:model/ExecuteMessagePostRequestOneOf22|module:model/ExecuteMessagePostRequestOneOf23|module:model/ExecuteMessagePostRequestOneOf24|module:model/ExecuteMessagePostRequestOneOf25|module:model/ExecuteMessagePostRequestOneOf3|module:model/ExecuteMessagePostRequestOneOf4|module:model/ExecuteMessagePostRequestOneOf5|module:model/ExecuteMessagePostRequestOneOf6|module:model/ExecuteMessagePostRequestOneOf7|module:model/ExecuteMessagePostRequestOneOf8|module:model/ExecuteMessagePostRequestOneOf9)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ExecuteMessagePostRequestOneOf</code>, <code>ExecuteMessagePostRequestOneOf1</code>, <code>ExecuteMessagePostRequestOneOf10</code>, <code>ExecuteMessagePostRequestOneOf11</code>, <code>ExecuteMessagePostRequestOneOf12</code>, <code>ExecuteMessagePostRequestOneOf13</code>, <code>ExecuteMessagePostRequestOneOf14</code>, <code>ExecuteMessagePostRequestOneOf15</code>, <code>ExecuteMessagePostRequestOneOf16</code>, <code>ExecuteMessagePostRequestOneOf17</code>, <code>ExecuteMessagePostRequestOneOf18</code>, <code>ExecuteMessagePostRequestOneOf19</code>, <code>ExecuteMessagePostRequestOneOf2</code>, <code>ExecuteMessagePostRequestOneOf20</code>, <code>ExecuteMessagePostRequestOneOf21</code>, <code>ExecuteMessagePostRequestOneOf22</code>, <code>ExecuteMessagePostRequestOneOf23</code>, <code>ExecuteMessagePostRequestOneOf24</code>, <code>ExecuteMessagePostRequestOneOf25</code>, <code>ExecuteMessagePostRequestOneOf3</code>, <code>ExecuteMessagePostRequestOneOf4</code>, <code>ExecuteMessagePostRequestOneOf5</code>, <code>ExecuteMessagePostRequestOneOf6</code>, <code>ExecuteMessagePostRequestOneOf7</code>, <code>ExecuteMessagePostRequestOneOf8</code>, <code>ExecuteMessagePostRequestOneOf9</code>.
     * @param {(module:model/ExecuteMessagePostRequestOneOf|module:model/ExecuteMessagePostRequestOneOf1|module:model/ExecuteMessagePostRequestOneOf10|module:model/ExecuteMessagePostRequestOneOf11|module:model/ExecuteMessagePostRequestOneOf12|module:model/ExecuteMessagePostRequestOneOf13|module:model/ExecuteMessagePostRequestOneOf14|module:model/ExecuteMessagePostRequestOneOf15|module:model/ExecuteMessagePostRequestOneOf16|module:model/ExecuteMessagePostRequestOneOf17|module:model/ExecuteMessagePostRequestOneOf18|module:model/ExecuteMessagePostRequestOneOf19|module:model/ExecuteMessagePostRequestOneOf2|module:model/ExecuteMessagePostRequestOneOf20|module:model/ExecuteMessagePostRequestOneOf21|module:model/ExecuteMessagePostRequestOneOf22|module:model/ExecuteMessagePostRequestOneOf23|module:model/ExecuteMessagePostRequestOneOf24|module:model/ExecuteMessagePostRequestOneOf25|module:model/ExecuteMessagePostRequestOneOf3|module:model/ExecuteMessagePostRequestOneOf4|module:model/ExecuteMessagePostRequestOneOf5|module:model/ExecuteMessagePostRequestOneOf6|module:model/ExecuteMessagePostRequestOneOf7|module:model/ExecuteMessagePostRequestOneOf8|module:model/ExecuteMessagePostRequestOneOf9)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = ExecuteMessagePostRequest.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of ExecuteMessagePostRequest from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/ExecuteMessagePostRequest} An instance of ExecuteMessagePostRequest.
     */
    static fromJSON = function(json_string){
        return ExecuteMessagePostRequest.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {Object} contract_info
 */
ExecuteMessagePostRequest.prototype['contract_info'] = undefined;

/**
 * @member {Object} contract_config
 */
ExecuteMessagePostRequest.prototype['contract_config'] = undefined;

/**
 * @member {Object} minters
 */
ExecuteMessagePostRequest.prototype['minters'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf3NumTokens} num_tokens
 */
ExecuteMessagePostRequest.prototype['num_tokens'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf4AllTokens} all_tokens
 */
ExecuteMessagePostRequest.prototype['all_tokens'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf5OwnerOf} owner_of
 */
ExecuteMessagePostRequest.prototype['owner_of'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf6NftInfo} nft_info
 */
ExecuteMessagePostRequest.prototype['nft_info'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf5OwnerOf} all_nft_info
 */
ExecuteMessagePostRequest.prototype['all_nft_info'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf8PrivateMetadata} private_metadata
 */
ExecuteMessagePostRequest.prototype['private_metadata'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf5OwnerOf} nft_dossier
 */
ExecuteMessagePostRequest.prototype['nft_dossier'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf10BatchNftDossier} batch_nft_dossier
 */
ExecuteMessagePostRequest.prototype['batch_nft_dossier'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf11TokenApprovals} token_approvals
 */
ExecuteMessagePostRequest.prototype['token_approvals'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf12InventoryApprovals} inventory_approvals
 */
ExecuteMessagePostRequest.prototype['inventory_approvals'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf13ApprovedForAll} approved_for_all
 */
ExecuteMessagePostRequest.prototype['approved_for_all'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf14Tokens} tokens
 */
ExecuteMessagePostRequest.prototype['tokens'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf15NumTokensOfOwner} num_tokens_of_owner
 */
ExecuteMessagePostRequest.prototype['num_tokens_of_owner'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf6NftInfo} is_unwrapped
 */
ExecuteMessagePostRequest.prototype['is_unwrapped'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf6NftInfo} is_transferable
 */
ExecuteMessagePostRequest.prototype['is_transferable'] = undefined;

/**
 * @member {Object} implements_non_transferable_tokens
 */
ExecuteMessagePostRequest.prototype['implements_non_transferable_tokens'] = undefined;

/**
 * @member {Object} implements_token_subtype
 */
ExecuteMessagePostRequest.prototype['implements_token_subtype'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf20VerifyTransferApproval} verify_transfer_approval
 */
ExecuteMessagePostRequest.prototype['verify_transfer_approval'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf21TransactionHistory} transaction_history
 */
ExecuteMessagePostRequest.prototype['transaction_history'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf22RegisteredCodeHash} registered_code_hash
 */
ExecuteMessagePostRequest.prototype['registered_code_hash'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf23RoyaltyInfo} royalty_info
 */
ExecuteMessagePostRequest.prototype['royalty_info'] = undefined;

/**
 * @member {Object} contract_creator
 */
ExecuteMessagePostRequest.prototype['contract_creator'] = undefined;

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf25WithPermit} with_permit
 */
ExecuteMessagePostRequest.prototype['with_permit'] = undefined;


ExecuteMessagePostRequest.OneOf = ["ExecuteMessagePostRequestOneOf", "ExecuteMessagePostRequestOneOf1", "ExecuteMessagePostRequestOneOf10", "ExecuteMessagePostRequestOneOf11", "ExecuteMessagePostRequestOneOf12", "ExecuteMessagePostRequestOneOf13", "ExecuteMessagePostRequestOneOf14", "ExecuteMessagePostRequestOneOf15", "ExecuteMessagePostRequestOneOf16", "ExecuteMessagePostRequestOneOf17", "ExecuteMessagePostRequestOneOf18", "ExecuteMessagePostRequestOneOf19", "ExecuteMessagePostRequestOneOf2", "ExecuteMessagePostRequestOneOf20", "ExecuteMessagePostRequestOneOf21", "ExecuteMessagePostRequestOneOf22", "ExecuteMessagePostRequestOneOf23", "ExecuteMessagePostRequestOneOf24", "ExecuteMessagePostRequestOneOf25", "ExecuteMessagePostRequestOneOf3", "ExecuteMessagePostRequestOneOf4", "ExecuteMessagePostRequestOneOf5", "ExecuteMessagePostRequestOneOf6", "ExecuteMessagePostRequestOneOf7", "ExecuteMessagePostRequestOneOf8", "ExecuteMessagePostRequestOneOf9"];

export default ExecuteMessagePostRequest;

