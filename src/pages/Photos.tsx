import { motion } from 'framer-motion'
import clsx from 'clsx'
import Container from '@components/Container'
import SectionTitle from '@components/common/SectionTitle'
import { photos } from '../content'

const tilts = ['-rotate-2', 'rotate-1', 'rotate-2', '-rotate-1']

const Photos = () => {
  return (
    <Container>
      <section className="py-16 md:py-24">
        <SectionTitle tone="p3">Photos</SectionTitle>
        <div className="mt-12 columns-1 gap-8 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <motion.figure
              key={photo.src + index}
              className={clsx(
                'mb-8 break-inside-avoid bg-paper p-3 pb-4 text-ink shadow-[6px_6px_0_#e60012] transition-transform duration-200 hover:z-10 hover:rotate-0 hover:scale-105',
                tilts[index % tilts.length]
              )}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className={clsx(
                  'w-full object-cover',
                  index % 2 ? 'aspect-square' : 'aspect-[4/5]'
                )}
              />
              <figcaption className="mt-3 font-display text-xl uppercase tracking-wider">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Photos
