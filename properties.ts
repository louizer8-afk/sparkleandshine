import type { Property } from "../data/properties";
import type { Route } from "../App";

type Props = {
  property: Property;
  onNavigate: (route: Route) => void;
};

export default function PropertyCard({ property, onNavigate }: Props) {
  return (
    <button
      onClick={() => onNavigate({ name: "property", id: property.id })}
      className="group text-left block w-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="card-image w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[0.65rem] tracking-[0.22em] uppercase font-medium">
          {property.status}
        </div>
        <div className="absolute top-4 right-4 bg-ink/80 backdrop-blur-sm text-white px-3 py-1.5 text-[0.65rem] tracking-[0.22em] uppercase font-medium">
          {property.type}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="inline-flex items-center gap-2 text-white text-[0.7rem] tracking-[0.22em] uppercase">
            View Property
            <span className="block w-8 h-px bg-gold" />
          </span>
        </div>
      </div>
      <div className="pt-5 pb-2">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl text-ink leading-tight">{property.title}</h3>
          <p className="font-display text-xl text-gold whitespace-nowrap">{property.priceLabel}</p>
        </div>
        <p className="text-sm text-ink/60 mt-1">{property.location}</p>
        <div className="mt-4 flex items-center gap-5 text-xs text-ink/60 tracking-wider">
          <Spec label="Bed" value={property.bedrooms} />
          <span className="w-px h-3 bg-ink/15" />
          <Spec label="Bath" value={property.bathrooms} />
          <span className="w-px h-3 bg-ink/15" />
          <Spec label="Sq Ft" value={property.area.toLocaleString()} />
        </div>
      </div>
    </button>
  );
}

function Spec({ label, value }: { label: string; value: number | string }) {
  return (
    <span className="flex items-baseline gap-1.5">
      <span className="font-display text-base text-ink">{value}</span>
      <span className="uppercase tracking-[0.18em] text-[0.65rem]">{label}</span>
    </span>
  );
}
