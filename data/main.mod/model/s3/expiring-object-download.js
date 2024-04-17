/**
    @module phront/data/main.mod/model/aws/s3/object
*/

var DataObject = require("montage/data/model/data-object").DataObject;

/**
 * @class ExpiringObjectDownload
 * @extends DataObject
 *
 */



exports.ExpiringObjectDownload = DataObject.specialize(/** @lends ExpiringObjectDownload.prototype */ {
    key: {
        value: undefined
    },
    bucketName: {
        value: undefined
    },
    bucket: {
        value: undefined
    },
    object: {
        value: undefined
    },
    expirationDelay: {
        value: undefined
    },
    signedUrl: {
        value: undefined
    }
});
