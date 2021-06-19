/**
 * specifies current write state of XmlWriter
 */
export declare type XmlWriteState = 'Initial' | 'StartDocument' | 'EndDocument' | 'StartElement' | 'EndElement' | 'ElementContent';
/**
 * specifies namespace kind
 */
export declare type NamespaceKind = 'Written' | 'NeedToWrite' | 'Implied' | 'Special';
/**
 * XmlWriter class provide method to create XML data
 */
export declare class XmlWriter {
    private bufferText;
    private bufferBlob;
    private currentState;
    private namespaceStack;
    private elementStack;
    private contentPos;
    private attributeStack;
    /**
     * Gets the content written to the {XmlWriter} as Blob.
     * @returns {Blob}
     */
    readonly buffer: Blob;
    /**
     * Initialize new instance of {XmlWriter}
     */
    constructor();
    /**
     * Writes processing instruction with a space between the name and text
     * @param {string} name - name of the processing instruction
     * @param {string} text - text to write in the processing instruction
     * @throws ArgumentException
     * @throws InvalidArgumentException
     * @throws InvalidOperationException
     */
    writeProcessingInstruction(name: string, text: string): void;
    /**
     * Writes Xml declaration with version and standalone attribute
     * @param {boolean} standalone - if true it write standalone=yes else standalone=no
     * @throws InvalidOperation
     */
    writeStartDocument(standalone?: boolean): void;
    /**
     * Closes any open tag or attribute and write the state back to start
     */
    writeEndDocument(): void;
    /**
     * Writes the specified start tag and associates it with the given namespace and prefix.
     * @param {string} prefix - namespace prefix of element
     * @param {string} localName -localName of element
     * @param {string} namespace - namespace URI associate with element
     * @throws ArgumentException
     * @throws InvalidOperationException
     */
    writeStartElement(prefix: string, localName: string, namespace: string): void;
    /**
     * Closes one element and pop corresponding namespace scope
     */
    writeEndElement(): void;
    /**
     * Writes an element with the specified prefix, local name, namespace URI, and value.
     * @param {string} prefix - namespace prefix of element
     * @param {string} localName - localName of element
     * @param {string} namespace - namespace URI associate with element
     * @param {string} value - value of element
     */
    writeElementString(prefix: string, localName: string, namespace: string, value: string): void;
    /**
     * Writes out the attribute with the specified prefix, local name, namespace URI, and value
     * @param {string} prefix - namespace prefix of element
     * @param {string} localName - localName of element
     * @param {string} namespace - namespace URI associate with element
     * @param {string} value - value of element
     */
    writeAttributeString(prefix: string, localName: string, namespace: string, value: string): void;
    /**
     * Writes the given text content
     * @param {string} text - text to write
     * @throws InvalidOperationException
     */
    writeString(text: string): void;
    /**
     * Write given text as raw data
     * @param {string} text - text to write
     * @throws InvalidOperationException
     */
    writeRaw(text: string): void;
    private writeInternal;
    /**
     * Saves the file with specified name and sends the file to client browser
     * @param {string} fileName - file name
     */
    save(fileName: string): void;
    /**
     * Releases the resources used by XmlWriter.
     */
    destroy(): void;
    private flush;
    private writeProcessingInstructionInternal;
    private writeStartAttribute;
    private writeStartAttributePrefixAndNameSpace;
    private writeStartAttributeSpecialAttribute;
    private writeEndAttribute;
    private writeStartElementInternal;
    private writeEndElementInternal;
    private writeStartAttributeInternal;
    private writeNamespaceDeclaration;
    private writeStartNamespaceDeclaration;
    private writeStringInternal;
    private startElementContent;
    private rawText;
    private addNamespace;
    private lookupPrefix;
    private lookupNamespace;
    private lookupNamespaceIndex;
    private pushNamespaceImplicit;
    private pushNamespaceExplicit;
    private addAttribute;
    private skipPushAndWrite;
    private checkName;
}
/**
 * class for managing namespace collection
 */
export declare class Namespace {
    /**
     * specifies namespace's prefix
     */
    prefix: string;
    /**
     * specifies namespace URI
     */
    namespaceUri: string;
    /**
     * specifies namespace kind
     */
    kind: NamespaceKind;
    /**
     * set value for current namespace instance
     * @param {string} prefix namespace's prefix
     * @param {string} namespaceUri namespace URI
     * @param {string} kind namespace kind
     */
    set(prefix: string, namespaceUri: string, kind: NamespaceKind): void;
    /**
     * Releases the resources used by Namespace
     */
    destroy(): void;
}
/**
 * class for managing element collection
 */
export declare class XmlElement {
    /**
     * specifies previous namespace top
     */
    previousTop: number;
    /**
     * specifies element prefix
     */
    prefix: string;
    /**
     * specifies element localName
     */
    localName: string;
    /**
     * specified namespace URI
     */
    namespaceUri: string;
    /**
     * set value of current element
     * @param {string} prefix - element prefix
     * @param {string} localName - element local name
     * @param {string} namespaceUri -namespace URI
     * @param {string} previousTop - previous namespace top
     */
    set(prefix: string, localName: string, namespaceUri: string, previousTop: number): void;
    /**
     * Releases the resources used by XmlElement
     */
    destroy(): void;
}
/**
 * class for managing attribute collection
 */
export declare class XmlAttribute {
    /**
     * specifies namespace's prefix
     */
    prefix: string;
    /**
     * specifies namespace URI
     */
    namespaceUri: string;
    /**
     * specifies attribute local name
     */
    localName: string;
    /**
     * set value of current attribute
     * @param {string} prefix - namespace's prefix
     * @param {string} namespaceUri - namespace URI
     * @param {string} localName - attribute localName
     */
    set(prefix: string, localName: string, namespaceUri: string): void;
    /**
     * get whether the attribute is duplicate or not
     * @param {string} prefix - namespace's prefix
     * @param {string} namespaceUri - namespace URI
     * @param {string} localName - attribute localName
     */
    isDuplicate(prefix: string, localName: string, namespaceUri: string): boolean;
    /**
     * Releases the resources used by XmlAttribute
     */
    destroy(): void;
}
