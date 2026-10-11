import "./section07-design-system.css"

const swatches = [
  ["1:382", "1:383", "1:384", "#dda15e", "DDA15E"],
  ["1:385", "1:386", "1:387", "#180029", "180029"],
  ["1:388", "1:389", "1:390", "#271931", "271931"],
  ["1:391", "1:392", "1:393", "#ffffff", "FFFFFF"],
] as const

const typeRows = [
  ["1:404", "1:406", "1:408", "1:410", "Heading", "36px", "heading"],
  ["1:411", "1:413", "1:415", "1:417", "Subheading", "24px", "subheading"],
  ["1:418", "1:419", "1:421", "1:423", "Body", "16px", "body"],
  ["1:424", "1:426", "1:428", "1:430", "Body light", "16px", "light"],
  ["1:431", "1:433", "1:435", "1:437", "Body Bold", "16px", "bold"],
] as const

/** Color and typography specimen from Figma frame 69:3804. */
export default function Section07DesignSystem() {
  return (
    <section className="attach-section-07" aria-label="Attach_App design system" data-node-id="69:3804">
      <div className="attach-section-07-card" data-node-id="1:376">
        <div className="attach-section-07-colors" data-node-id="1:378">
          <div className="attach-section-07-title attach-section-07-title--colors" data-node-id="1:379">
            <h2 data-node-id="1:380">Colors</h2>
          </div>
          <div className="attach-section-07-swatches" data-node-id="1:381">
            {swatches.map(([frameId, colorId, textId, color, label]) => (
              <figure data-node-id={frameId} key={label}>
                <i data-node-id={colorId} style={{ background: color }} />
                <figcaption data-node-id={textId}>{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="attach-section-07-typography" data-node-id="1:394">
          <div className="attach-section-07-title attach-section-07-title--typography" data-node-id="1:395">
            <h2 data-node-id="1:396">Typography</h2>
          </div>
          <div className="attach-section-07-type-card" data-node-id="1:397">
            <header data-node-id="1:398">
              <h3 data-node-id="1:399">Product Sans<br />Black</h3>
              <div data-node-id="1:400">
                <p data-node-id="1:401">A B C D E F G H I J K L M N P Q R S T U V W X Y Z</p>
                <p data-node-id="1:402">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
              </div>
            </header>
            <div className="attach-section-07-type-rows" data-node-id="1:403">
              {typeRows.map(([rowId, sampleId, labelId, sizeId, label, size, variant]) => (
                <div className={`attach-section-07-type-row attach-section-07-type-row--${variant}`} data-node-id={rowId} key={rowId}>
                  <p data-node-id={sampleId}>Your destination is just one ride away.</p>
                  <span data-node-id={labelId}>{label}</span>
                  <span data-node-id={sizeId}>{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
