export const size = {
    mm: '320px',
    md: '380px',
    mg: '600px',

    tbm: '750px',
    tbmd: '800px',
    tbg: '900px',

    bg: '1000px',
    mw: '1120px',
    mdw: '1250px',
    uw: '1400px',
}


export const breakPoints = {
    mm: `(min-width: ${size.mm})`,
    md: `(min-width: ${size.md})`,
    mg: `(min-width: ${size.mg})`,

    tbm: `(min-width: ${size.tbm})`,
    tbmd: `(min-width: ${size.tbmd})`,
    tbg: `(min-width: ${size.tbg})`,



    bg: `(min-width: ${size.bg})`,
    mw: `(min-width: ${size.mw})`,
    mdw: `(min-width: ${size.mdw})`,
    uw: `(min-width: ${size.uw})`,

}

export const getTamanhoDaTela = () => {
    return {
      largura: window.innerWidth,
      altura: window.innerHeight
    };
  };