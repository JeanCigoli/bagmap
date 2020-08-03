package com.maps.bagmap.dto;

public class SearchMapDirection {

	private Location origin;

	private Location dest;

	public SearchMapDirection() {
	}

	public Location getOrigin() {
		return origin;
	}

	public void setOrigin(Location origin) {
		this.origin = origin;
	}

	public Location getDest() {
		return dest;
	}

	public void setDest(Location dest) {
		this.dest = dest;
	}

	public class Location {

		private Double lat;

		private Double lng;

		public Location() {

		}

		public Double getLat() {
			return lat;
		}

		public void setLat(Double lat) {
			this.lat = lat;
		}

		public Double getLng() {
			return lng;
		}

		public void setLng(Double lng) {
			this.lng = lng;
		}

	}

}
