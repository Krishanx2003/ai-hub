interface SiteConfig {
    site: {
      title: string;
      base_url: string;
      favicon: string;
      logo: string;
      logo_width: string;
      logo_height: string;
      logo_text: string;
    };
    settings: {
      pagination: number;
      summary_length: number;
      blog_folder: string;
    };
    params: {
      tag_manager_id: string;
      contact_form_action: string;
      copyright: string;
    };
    metadata: {
      meta_author: string;
      meta_image: string;
      meta_description: string;
    };
  }
  
  const config: SiteConfig = {
    site: {
      title: "Bookworm Next | Personal Blog Theme",
      base_url: "/",
      favicon: "/images/favicon.png",
      logo: "/images/logo.png",
      logo_width: "200",
      logo_height: "34",
      logo_text: "Bookworm Light",
    },
    settings: {
      pagination: 3,
      summary_length: 200,
      blog_folder: "posts",
    },
    params: {
      tag_manager_id: "",
      contact_form_action: "#",
      copyright: "Copyright © 2022 a theme by [themefisher](https://themefisher.com)",
    },
    metadata: {
      meta_author: "Themefisher",
      meta_image: "/images/og-image.png",
      meta_description: "Next Boilerplate",
    },
  };
  
  export default config;

  