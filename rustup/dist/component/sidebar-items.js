initSidebarItems({"constant":[["INSTALLER_VERSION","The current metadata revision used by rust-installer"],["VERSION_FILE",""]],"mod":[["components",""],["package","An interpreter for the rust-installer package format.  Responsible for installing from a directory or tarball to an installation prefix, represented by a `Components` instance."],["transaction","A transactional interface to file system operations needed by the installer."]],"struct":[["Component",""],["ComponentBuilder",""],["ComponentPart",""],["Components",""],["DirectoryPackage",""],["TarGzPackage",""],["TarPackage",""],["TarXzPackage",""],["Transaction","A Transaction tracks changes to the file system, allowing them to be rolled back in case of an error. Instead of deleting or overwriting file, the old copies are moved to a temporary folder. If the transaction is rolled back, they will be moved back into place. If the transaction is committed, these files are automatically cleaned up using the temp system."]],"trait":[["Package",""]]});