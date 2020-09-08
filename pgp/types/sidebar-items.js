initSidebarItems({"enum":[["CompressionAlgorithm","Available compression algorithms. Ref: https://tools.ietf.org/html/rfc4880.html#section-9.3"],["KeyVersion",""],["PacketLength","Represents the packet length."],["PlainSecretParams",""],["PlainSecretParamsRef",""],["PublicParams","Represent the public paramaters for the different algorithms."],["RevocationKeyClass",""],["SecretKeyRepr","The version of the secret key that is actually exposed to users to do crypto operations."],["SecretParams","A list of params that are used to represent the values of possibly encrypted key, from imports and exports."],["StringToKeyType","Available String-To-Key types"],["Tag","Packet tag as defined in RFC 4880, Section 4.3 \"Packet Tags\""],["Version",""]],"fn":[["mpi","Parse Multi Precision Integers Ref: https://tools.ietf.org/html/rfc4880.html#section-3.2"],["s2k_parser",""]],"mod":[["encrypted_secret",""],["plain_secret",""],["public",""],["secret",""]],"struct":[["DSASecretKey","Secret key for DSA."],["ECDHSecretKey","Secret key for ECDH with Curve25519, the only combination we currently support."],["EdDSASecretKey","Secret key for EdDSA with Curve25519, the only combination we currently support."],["EncryptedSecretParams",""],["KeyId","Represents a Key ID."],["Mpi","Represents an owned MPI value. The inner value is ready to be serialized, without the need to strip leading zeros."],["MpiRef","Represents a borrowed MPI value. The inner value is ready to be serialized, without the need to strip leading zeros."],["Packet","Represents a Packet. A packet is the record structure used to encode a chunk of data in OpenPGP. Ref: https://tools.ietf.org/html/rfc4880.html#section-4"],["RevocationKey",""],["SignedUser",""],["SignedUserAttribute",""],["StringToKey",""]],"trait":[["KeyTrait",""],["PublicKeyTrait",""],["SecretKeyTrait",""]]});